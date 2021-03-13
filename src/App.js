import './App.css';
import {Switch, Route} from 'react-router-dom';
import { Doilies } from './tabs/Doilies';
import { Library } from './tabs/Library';
import { Header } from './tabs/Header';

function App() {
  return (
    <div className='page'>
      <Header />
      <Switch>
      <Route exact path='/' component={Library}/>
      <Route path='/doilies' component={Doilies}/>
      </Switch>
    </div>
  );
}

export default App;
