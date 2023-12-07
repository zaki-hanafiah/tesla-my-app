import React from 'react';
import logo from './logo.svg';
import { set, get } from 'idb-keyval';
import './App.css';
import * as serviceWorker from './serviceWorkerRegistration';

function App() {
  const [keyVal, setKeyVal] = React.useState<string>('');

  serviceWorker.register();

async function testIDBKeyval() {
    await set('hello', 'world');
    const whatDoWeHave = await get('hello');
    setKeyVal(whatDoWeHave);
}

testIDBKeyval();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {keyVal}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
