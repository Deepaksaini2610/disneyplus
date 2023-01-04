import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from './Firebase';
import './Login.css'


import {getDatabase,ref ,set} from 'firebase/app';
// import { app } from "./firebase";
import { app } from './firebase'
 const db = getDatabase(app);

export default function Login(props) {
const putData = () =>{
  set(ref(db,'users/deepak'),{
    id:1,
    name:"deepak",
    age:22
  });
}

  return (
    <div className="Logn">
      <div className="logo">
        <img
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt="BigCo Inc. logo"
        />
      </div>
      <div>
        <button className='anchor' onclick = {putData} >
          
          Login
        
        </button>
      </div>
    </div>
  );
}
