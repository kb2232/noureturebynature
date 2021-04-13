import './App.css';

import {Cards} from '../components';


const App = ():JSX.Element => {
  return (
    <main className='home_container'>
      <h1>Welcome to <span>Noureture by Nature</span></h1>
      <h2> Website comining soon</h2>
      <div className='card_container'>
        <Cards />
      </div>
    </main>
  );
}

export default App;
