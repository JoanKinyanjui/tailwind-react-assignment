import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import ProfileDetails from './Components/ProfileDetails/ProfileDetails';
import SignOut from './Components/SignOut/SignOut';
import Chats from './Components/Chats/Chats';
import {users} from './users';

function App() {
  return (
    <>
     <Router>
<div className='App'>
<Routes>
    <Route exact path='/'  element={<Login />}/>


    <Route exact path='/profile/:id'  element={<Profile   />}/>

    <Route exact path='/signout'  element={<SignOut/>}/>

</Routes>
   
  </div>

</Router>


    </>
  );
}

export default App;
