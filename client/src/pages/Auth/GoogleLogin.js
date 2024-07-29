import {GoogleLogin} from "react-google-login";


const clientId  = "966885978161-5hvosoto2l09k4ntrl2pa93tsb3144uf.apps.googleusercontent.com"

function Logins(){

    const onSuccess =(res)=>{
        console.log("Login success",res.profileObj);
    }

    const onFailure = (res)=>{
        console.log("Login failed",res);
    }


    return(
        <div id="signInButton">
            <GoogleLogin
            className=""
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn = {true}
            />
        </div>
    )
}


export default Logins