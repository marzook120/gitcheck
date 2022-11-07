import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="row">
    <div className='col'>
    <Provider store={store}>
      <UserManagement/>
    </Provider>

    </div>
   
  </div>
  )
}

export default App;
