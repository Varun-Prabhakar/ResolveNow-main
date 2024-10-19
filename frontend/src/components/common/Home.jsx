import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/Image1.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'

const Home = () => {
   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand><b>RESOLVE NOW</b> </Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'}
                        className={`nav-link text-light `}
                     >
                        <b>Home</b>
                     </Link>
                  </li>
                  {/* <li className="nav-item mb-2">
                     <Link
                        to={'/About'}
                        className={`nav-link text-light `}
                     >
                        About
                     </Link>
                  </li> */}
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link text-light `}
                     >
                        <b>SignUp</b>
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link text-light `}
                     >
                        <b>Login</b>
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <Container className='home-container'>
            <div className="left-side">
               <img src="https://i.ibb.co/CMNfVFN/1000140034-removebg.png" alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='f-letter'><b>SWIFT  RESOLVE</b></span><br />
                  <span className='s-letter'> "Faster <b>Complaints</b>, Instant <b>Solutions</b></span> <br />
                  <span className='t-letter'>"Voice Your <b>Concerns</b>, We’ll Handle the <b>Rest."</b></span><br />
                  <Link to={'/Login'}><Button className='mt-3 register'><b>Register your Compliant</b></Button></Link>
               </p>
            </div>
         </Container>
         <Footer/>
      </>
   )
}

export default Home