import './App.css';
import Banner from './components/Banner/Banner';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Switch></Switch>
    </div>
  );
}

export default App;
