import "./img.png"
import './App.css';
import {Amplify} from 'aws-amplify';
import { useAuthenticator, withAuthenticator,useTheme,Text,View,Image,Authenticator } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from "aws-amplify";
import awsExports from './aws-exports';
Amplify.configure(awsExports);
function App() {
  const {signOut}= useAuthenticator();
 
 
  return (
   
   
    <nav className="navbar bg-dark">
    <div className="container-fluid">
        <span className="appName">
            CloudXcel User Authentication</span>
            <button  onClick={signOut}>Sign out</button>
    </div>
</nav>
    
    

  );
}

export default withAuthenticator(App);
