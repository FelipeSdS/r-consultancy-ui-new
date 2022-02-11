import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header  from './Components/Header';
import { NotificationProvider } from './hook/useNotification';
import Routes from './routes';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
    <BrowserRouter>
      <NotificationProvider>
        <Header />
        <Routes />
        <GlobalStyle />
      </NotificationProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
