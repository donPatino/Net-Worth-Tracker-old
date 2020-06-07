import React, {useEffect, useState} from 'react';
import './App.css';

import Edit from './Edit';
import Dashboard from './Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Asset } from './models';
import { DataStore, Predicates } from '@aws-amplify/datastore';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, {Auth} from '@aws-amplify/core'
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);



function App() {
  let [assets, setAssets] = useState();

  let addAsset = async () => {
    await DataStore.save(
      new Asset({
          symbol: 'MSFT',
          holdings: 2,
          price: 1000,
          value: 2000
      })
    );
  };

  let listAssets = async () => {
    let assets = await DataStore.query(Asset);
    setAssets(assets);
    console.log(assets);
    return assets;
  };

  let deleteAllAssets = async () => {
    let res = await DataStore.delete(Asset, Predicates.ALL);
    console.log(res);
  };

  useEffect(() => {
    listAssets();
  }, []);

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <AmplifySignOut/>
          </li>
        </ul>
      </nav>
    </div>
    
    <Switch>
      <Route exact path="/dashboard">
        <Dashboard assets={assets} />
      </Route>
      <Route exact path="/edit">
        <Edit />
      </Route>
      <Route path="/">
        <p>Index</p>
      </Route>
    </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
