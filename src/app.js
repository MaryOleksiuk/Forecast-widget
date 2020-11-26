// Core
import React from 'react';
import { Provider } from 'react-redux';

// Components
import { Weather } from './bus/weather';

// Other
import './init/moment';
import { store } from './init/store';

// Libraries
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export const App = () => {
  return (
    <>
        <Provider store={store}>
            <Weather />
        </Provider>
    </>
  )
};
