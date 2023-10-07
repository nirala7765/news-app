
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import User from './User'



function Auth() {
    const [userData, setUserData] = useState("userData");

    if (userData) {
        window.localStorage.setItem("Name", userData.name);
        window.localStorage.setItem("Email", userData.email);
        window.localStorage.setItem("Picture", userData.picture);

        return <User info = {userData} />;


    }

    let name = window.localStorage.getItem("name");
    let email = window.localStorage.getItem("email");
    let picture = window.localStorage.getItem("picture");


    if (name && email && picture ) {
        setUserData({ name: name, email: email, picture: picture });

    }


    return (

        <>





            <GoogleOAuthProvider clientId="873466604158-ge7on3ktv4s6402c0dip7at18314cav2.apps.googleusercontent.com">

                <GoogleLogin
                    onSuccess={credentialResponse => {

                        let token = credentialResponse.credential;

                        var decoded = jwt_decode(token);

                        console.log("userInfo Decodes As===>", decoded);

                        setUserData(decoded);


                        console.log("logged IN ======>", credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />




            </GoogleOAuthProvider>;



        </>

    );
}

export default Auth;