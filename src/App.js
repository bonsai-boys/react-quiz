import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import { AppBar } from 'material-ui';
import TabComponent from './TabComponent';

const App = () => (
  <MuiThemeProvider>
    <TabComponent/>
    <MyAwesomeReactComponent />
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

export default App;