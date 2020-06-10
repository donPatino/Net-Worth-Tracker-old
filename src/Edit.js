import React from 'react';

import { Formik } from 'formik';

import { Asset } from './models';
import { DataStore } from '@aws-amplify/datastore';

let addAsset = async (symbol, holdings) => {
    console.log(symbol, holdings);
    await DataStore.save(
      new Asset({symbol, holdings})
    );
};

let Edit = () => (
    <div>
        <h1>Edit</h1>

        <Formik
          initialValues={{ symbol: 'AMZN', holdings: 1 }}
          onSubmit={({symbol, holdings}, actions) => {
            addAsset(symbol, holdings);
            actions.setSubmitting(false);
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="symbol">Company Ticker/Symbol </label>
                <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.symbol}
                    name="symbol"
                />
                {props.errors.symbol && <div id="feedback">{props.errors.symbol}</div>}

                <br />

                <label htmlFor="holdings">How many shares are you holding? </label>
                <input
                    type="number"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.holdings}
                    name="holdings"
                />
                {props.errors.holdings && <div id="feedback">{props.errors.holdings}</div>}

                <br />

                <button type="submit">Submit</button>
            </form>
          )}
        </Formik>

    </div>
);

export default Edit;