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
   
    <Authenticator   >
      {/* <View textAlign="center" >
          <Image
            alt="Company Logo"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=432,fit=crop,q=95/mxBjreBL9ZfB5Gob/microsoftteams-image-d95Dp2xwZMSOW8bQ.png" // Replace with your company logo URL
            width={100} // Adjust width as needed
          />
        </View> */}
    {({ signOut }) => <button textAlign="center" onClick={signOut}>Sign out</button>}
  </Authenticator>
  );
}

export default withAuthenticator(App);
