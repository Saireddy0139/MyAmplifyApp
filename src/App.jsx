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
  const {user ,signOut}= useAuthenticator();
 
 
  return (
   
   
    <nav className="navbar bg-dark">
    <div className="container-fluid">
        <span className="appName">
            CloudXcel User Authentication {user.username}</span>
            <button  onClick={signOut}>Sign out</button>
    </div>
</nav>
    
    

  );
}

export default withAuthenticator(App);
// function App({ user, signOut }) {
//   return (
//     <div>
//       <div className="flex justify-end px-4 py-2">
//         <div className="mr-4">Welcome, {user.username}</div>
//         <button
//           type="button"
//           className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
//           onClick={() => signOut()}
//         >
//           Sign Out
//         </button>
//       </div>
//       <div className="flex justify-center items-center h-screen w-full">
//         Hello World
//       </div>
//     </div>
//   );
// }

// export default withAuthenticator(App);
