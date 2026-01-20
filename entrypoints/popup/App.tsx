import './App.css';
import { useEffect, useState } from "react";
import { Browser } from 'wxt/browser';

interface Settings {
  hints: boolean;
  tags: boolean;
  resources: boolean;
  solutions: boolean;
}

export default function App() {
  const [settings, setSettings] = useState<Settings>({
    hints: true,
    tags: true,
    resources: true,
    solutions: true
  });

  // Load settings from storage on mount
  useEffect(() => {
    const loadSettings = async () => {
      const result = await browser.storage.sync.get('cses_settings');
      if (result.cses_settings) {
        setSettings(result.cses_settings as Settings);
      }
    };
    loadSettings();
  }, []);

  // Save settings whenever they change
  const handleToggle = async (key: keyof Settings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);

    // Save to storage
    await browser.storage.sync.set({ cses_settings: newSettings });

    // Notify content script to update
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs[0]?.id) {
      browser.tabs.sendMessage(tabs[0].id, {
        type: 'SETTINGS_UPDATED',
        settings: newSettings
      });
    }
  };

  return (
    <div style={{
      width: '300px',
      padding: '16px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h2 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>CSES Helper</h2>
      <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
        Instantly view hints and topic tags for CSES problems directly on the problem page.
      </p>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{
          fontSize: '14px',
          fontWeight: '600',
          margin: '0 0 12px 0'
        }}>
          Display Settings
        </h3>

        <ToggleItem
          label="Show Hints"
          checked={settings.hints}
          onChange={() => handleToggle('hints')}
        />
        <ToggleItem
          label="Show Topic Tags"
          checked={settings.tags}
          onChange={() => handleToggle('tags')}
        />
        <ToggleItem
          label="Show Resources"
          checked={settings.resources}
          onChange={() => handleToggle('resources')}
        />
        <ToggleItem
          label="Show Solutions"
          checked={settings.solutions}
          onChange={() => handleToggle('solutions')}
        />
      </div>

      <p style={{
        fontSize: '12px',
        color: '#888',
        margin: 0
      }}>
        Open any problem on cses.fi to get started.
      </p>
    </div>
  );
}

interface ToggleItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

function ToggleItem({ label, checked, onChange }: ToggleItemProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
      borderBottom: '1px solid #eee'
    }}>
      <span style={{ fontSize: '14px' }}>{label}</span>
      <label style={{
        position: 'relative',
        display: 'inline-block',
        width: '44px',
        height: '24px'
      }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span style={{
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: checked ? '#4CAF50' : '#ccc',
          transition: '0.4s',
          borderRadius: '24px'
        }}>
          <span style={{
            position: 'absolute',
            content: '',
            height: '18px',
            width: '18px',
            left: checked ? '23px' : '3px',
            bottom: '3px',
            backgroundColor: 'white',
            transition: '0.4s',
            borderRadius: '50%'
          }} />
        </span>
      </label>
    </div>
  );
}
