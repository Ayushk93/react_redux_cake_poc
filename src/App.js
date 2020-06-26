import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <NewCakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
