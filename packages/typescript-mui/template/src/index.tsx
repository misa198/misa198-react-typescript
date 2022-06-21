import App from 'App';
import { history, store } from 'app/store';
import 'assets/styles/global.css';
import DefaultTheme from 'components/common/DefaultTheme';
import i18n from 'i18next';
import en from 'locales/en/en.json';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import reportWebVitals from './reportWebVitals';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <HelmetProvider>
          <DefaultTheme>
            <App />
          </DefaultTheme>
        </HelmetProvider>
      </HistoryRouter>
    </Provider>
  </StrictMode>,
);

reportWebVitals();
