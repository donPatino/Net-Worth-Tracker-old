import React from 'react';

import { Asset } from './models';
import { DataStore } from '@aws-amplify/datastore';

let deleteAsset = async (asset) => {
    let res = await DataStore.delete(asset);
    console.log(res);
};

let Dashboard = ({assets}) => (
    <div>
        <h1>Dashboard</h1>
        
        <table>
            <caption>Assets</caption>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Holdings</th>
                </tr>
            </thead>
            <tbody>
                {
                    assets ? (
                        assets.map((asset, id) => (
                        <tr key={asset.symbol}>
                            <td key={id}>{asset.symbol}</td>
                            <td key={id+1}>{asset.holdings}</td>
                            <td key={id+2}><button onClick={() => {deleteAsset(asset)}}>Delete</button></td>
                        </tr>
                        ))
                    ) : (
                        <tr><td>Loading...</td></tr>
                    )
                }
            </tbody>
        </table>
    </div>
);

export default Dashboard;