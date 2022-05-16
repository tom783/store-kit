import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './stores';
import { createGlobalStyle } from 'styled-components';
import resetCss from 'sanitize.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const GlobalStyles = createGlobalStyle`
 ${resetCss}
  
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
      list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Store Kit</title>
      </Helmet>
    </HelmetProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
