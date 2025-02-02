import { createRoot } from 'react-dom/client';
import { store, persistor } from './redux/store.ts';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>

);
