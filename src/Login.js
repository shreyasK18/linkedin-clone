import React,{ useState} from 'react';
import { useDispatch} from 'react-redux';
import './Login.css';

import { auth } from './firebase';
import { login } from './features/user/userSlice';
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [profilePic,setProfilePic]=useState('');
    const dispatch = useDispatch();
    const [name,setName]=useState('');
    const loginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
          console.log(userAuth.user);
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoUrl:userAuth.user.photoURL
                  }))
        
        }).catch((error)=>alert(error.message));
    }
    const register=()=>{
      //  alert("Register Called");
        if(!name){
            return alert("Please enter a full name");

        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic
                }))
            })
        }).catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt=""/>
        <form>
            <input  placeholder="Full name (required if regirstering)" value={name} onChange={e=>setName(e.target.value)}/>
            <input  placeholder="Profile pic URL [optional]" type="text" value={profilePic} onChange={e=>setProfilePic(e.target.value)}/>
            <input  placeholder="Email" type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input  placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
            <p>Not a member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
