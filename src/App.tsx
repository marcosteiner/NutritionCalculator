import React from 'react';
import './App.css';
import Foods from "./views/Foods/Foods";
import { Provider } from 'react-redux';
import Navigation from "./views/Navigation";
import {store} from "./stores";

function App() {
  return (
      <Provider store={store}>
          <div>
              <Navigation/>
              <Foods/>
          </div>
      </Provider>
  );
}

export default App;
