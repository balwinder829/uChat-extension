/*global chrome*/

import { useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
 
  useEffect(() => {
    console.log('app loaded');

    chrome?.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs,'tabssssss')
    });
  }, []);
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
