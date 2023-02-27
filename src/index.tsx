import { createRoot } from 'react-dom/client';

import App from './components/App';

function initialiseApp() {
  const wrapper = document.getElementById('main');

  if (wrapper) {
    const root = createRoot(wrapper);
    root.render(<App />);
  }
}

initialiseApp();
