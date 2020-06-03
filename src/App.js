import React, {useEffect} from 'react';
import './App.css';

import { Asset } from './models';
import { DataStore, Predicates } from '@aws-amplify/datastore';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, {Auth} from '@aws-amplify/core'
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {

  let addAsset = async () => {
    await DataStore.save(
      new Asset({
          symbol: 'AMZN',
          holdings: 2,
          price: 1000,
          value: 2000
      })
    );
  };

  let listAssets = async () => {
    let assets = await DataStore.query(Asset);
    console.log(assets);
    return assets;
  };

  let deleteAllAssets = async () => {
    let res = await DataStore.delete(Asset, Predicates.ALL);
    console.log(res);
  };

  return (
    <div className="App">
      <h1>Net Worth Tracker v1</h1>
      <button onClick={addAsset}>Add AMZN</button>
      <button onClick={listAssets}>List Assets</button>
      <button onClick={deleteAllAssets}>Delete All Assets</button>
    </div>
  );
}

export default withAuthenticator(App);
