import React from 'react'
import "../Styles/Header.css"

function Header(props) {
  return (

    <header className='header-container'>
        <div className='logo-title'>
            <img 
                src='https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/kn.png?alt=media&token=9215bfd5-311b-47d4-88c6-00f951e68d31&_gl=1*11jnd17*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5Njc3NjM1MC4zNS4xLjE2OTY3NzYzOTguMTIuMC4w'
                alt=''
                className='logo'

            
            />

            <h1 className='title'>Nirala News</h1>


        </div>

        <nav className='Navigation'>

            <ul className='nav-links'>

                <li>

                    <a href='/home'>Home</a>
                </li>

                <li>

                    <a href='/home'>Headlines</a>
                </li>

                <li>

                    <a href='/home'>Services</a>
                </li>

                <li>

                    <a href='/home'>About us</a>
                </li>

                <li>

                    <a className='contact' href='/home'>Contact Us</a>
                </li>

               

                <li>

                    <img className='user-profile'
                    src={props.data.info.picture}
                    alt=''/>

                    
                </li>

                <li>
                    <button className='logout-button'
                    onClick={()=>{
                        window.localStorage.clear();
                        window.location.assign('http://localhost:3000/')


                    }
                    }>Logout</button>
                </li>







            </ul>

        </nav>


    
    </header>
    
  )
}

export default Header