
import './App.css';
import {Amplify} from 'aws-amplify';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from "aws-amplify";
import awsExports from './aws-exports';
Amplify.configure(awsExports);
function App() {
  const {signOut}= useAuthenticator();
  return (
    <div className="App">
     <h3>HELLO WORLD :</h3>
     <button onClick={signOut}>LogOut</button>
    </div>
  );
}

export default withAuthenticator(App);
