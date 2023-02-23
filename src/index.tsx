import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}
root.render( 
  <React.StrictMode>
    <Provider store={store}>
      <DAppProvider config={config}>
          <App />
      </DAppProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
