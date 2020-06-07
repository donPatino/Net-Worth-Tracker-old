import React, {useEffect, useState} from 'react';

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