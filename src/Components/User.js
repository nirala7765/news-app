import React from 'react';

function User(props) {

    console.log(props);
    return (
        <div>

            <img src={props.info.picture} alt='' />
            <h1>{props.info.name}</h1>
            <h2>{props.info.email}</h2>

        </div>



    )
}

export default User;