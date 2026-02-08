# CSESHelper

> 🚀 Chrome Extension to supercharge your CSES problem solving experience!

## Features
- 💡 Contextual hints for CSES problems
- 🧠 React-powered UI, seamlessly integrated into problem pages
- 📋 Hints appear right before your submissions for easy access
- 🔒 No data tracking, privacy-friendly

## Installation
1. Clone this repo:
   ```sh
   git clone https://github.com/yourusername/CSES_Helper.git
   ```
2. Build the extension:
   ```sh
   cd csesHelper
   npm install
   npm run build
   ```
3. Load into Chrome:
   - Go to `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `csesHelper` folder

## Usage
- Visit any CSES problem page (e.g. `https://cses.fi/problemset/task/1638`)
- Hints will appear before the "Your submissions" section
- Click "Next Hint" to cycle through available hints

## Development
- React code lives in `src/`
- Content script: `scripts/content.js`
- Hints data: `data/hints.js`
- Build with Vite: `npm run build`
- Popup UI: `popup/`

## Contributing
Pull requests and suggestions are welcome! Open an issue or PR to help improve CSESHelper.

## License
MIT

---
Made with ❤️ for competitive programmers.

# CSES_Helper
# CSES_Helpershare
