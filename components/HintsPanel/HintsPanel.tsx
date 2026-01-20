import { useState, useEffect } from "react";
//import browser from 'webextension-polyfill';
import { Browser } from "wxt/browser";
import HINTS from "@/data/hints";
import PROBLEM_TOPICS from "@/data/topics";
import PROBLEM_RESOURCES from "@/data/resources";
import HintItem from "./HintItem";
import TopicsPanel from "./TopicsPanel.tsx";
import ResourcesPanel from "./ResourcesPanel.tsx";
import ViewSolution from "./ViewsolutionPanel.tsx";
import { getStyles } from "./styles";

type Props = {
  problemId: string;
};

interface Settings {
  hints: boolean;
  tags: boolean;
  resources: boolean;
  solutions: boolean;
}

export default function HintsPanel({ problemId }: Props) {
  const styles = getStyles();
  const hints = HINTS[problemId as keyof typeof HINTS] || [];
  const topics = PROBLEM_TOPICS[problemId as keyof typeof PROBLEM_TOPICS] || [];
  const resources =
    PROBLEM_RESOURCES[problemId as keyof typeof PROBLEM_RESOURCES] || [];

  const [open, setOpen] = useState<Record<string | number, boolean>>({});
  const [settings, setSettings] = useState<Settings>({
    hints: true,
    tags: true,
    resources: true,
    solutions: true
  });

  // Load settings from storage
  useEffect(() => {
    const loadSettings = async () => {
      const result = await browser.storage.sync.get('cses_settings');
      if (result.cses_settings) {
        setSettings(result.cses_settings as Settings);
      }
    };
    loadSettings();

    // Listen for settings updates
    const handleMessage = (message: any) => {
      if (message.type === 'SETTINGS_UPDATED') {
        setSettings(message.settings);
      }
    };

    browser.runtime.onMessage.addListener(handleMessage);

    return () => {
      browser.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  const toggle = (key: string | number) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={styles.containerStyle}>
      {/* Hints Section */}
      {settings.hints && (
        <>
          {hints.length > 0 ? (
            hints.map((hint, i) => (
              <HintItem
                key={i}
                index={i}
                text={hint}
                open={!!open[i]}
                toggle={toggle}
              />
            ))
          ) : (
            <div
              style={{
                padding: "8px 12px",
                color: "#888",
                fontStyle: "italic",
              }}
            >
              Hints will be added soon
            </div>
          )}
        </>
      )}

      {/* Topics/Tags Section */}
      {settings.tags && (
        <TopicsPanel
          topics={topics}
          open={!!open.topics}
          toggle={() => toggle("topics")}
        />
      )}

      {/* Solutions Section */}
      {settings.solutions && (
        <ViewSolution questionId={problemId} />
      )}

      {/* Resources Section */}
      {settings.resources && (
        <ResourcesPanel
          resources={resources}
          open={!!open.resources}
          toggle={() => toggle("resources")}
        />
      )}
    </div>
  );
}
