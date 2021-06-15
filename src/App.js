import React,{ useEffect } from 'react';

import { useSelector} from 'react-redux';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import { useDispatch} from 'react-redux';
import Login from './Login';
import { selectUser,login,logout } from './features/user/userSlice';
import './App.css';
import { auth } from './firebase';
import Widget from './Widget'
function App() {
  const user = useSelector(selectUser);
   const dispatch = useDispatch();
  useEffect(()=>{
auth.onAuthStateChanged(userAuth=>{
  console.log(userAuth);
      if(userAuth){
        // user is logged in
        dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:userAuth.user.name,
          photoUrl:userAuth.user.profilePic
        }));
      } else{
        // user is logged out
        dispatch(logout());
      } 
    })
      },
  []);
  return (
    <div className="app">
    {/* Header */}
    <Header/>
     {!user ? (<Login/>) :(
       
        <div className="app__body">
            <Sidebar/>
              <Feed/>
              <Widget/>
        </div>
     )}
     
      
    </div>
  );
}

export default App;
