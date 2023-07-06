import logo from './logo.svg';
import './App.css';
import Login from './componets/Login';
import {useAuth0} from '@auth0/auth0-react';
import Profile from './componets/Profile';
import Logout from './componets/Logout';

function App() {
  const {isautenthicated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          isautenthicated?(
          <>
          <Profile/>
          <Logout/>
          </>
          ): (<Login/>)
        }
      </header>
    </div>
  );
}

export default App;
