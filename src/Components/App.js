
import { Component } from 'react';
import './App.css';
import Header from './Header';

import Aside from './Aside';

class App extends Component{
  render(){
      return (
        <>
          <Header />
          <Aside />
        </>
      );
  }
}

export default App;
