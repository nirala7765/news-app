import React from 'react';
import Header from './Header'
import NewsComponent from './NewsComponent';

function User(props) {


    return (
        <>

            <div>
                <Header data={props} />

                <NewsComponent/>

            </div>



        </>



    );
}

export default User;