import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC';

const SignUp = () => {
   const [title, setTitle] = useState("Select User");
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      userType: ""
   });
   const [adminPassword, setAdminPassword] = useState("");
   const [agentPassword, setAgentPassword] = useState(""); 
   const [isAdmin, setIsAdmin] = useState(false);
   const [showPasswordInput, setShowPasswordInput] = useState(false);
   const [showAgentPasswordInput, setShowAgentPasswordInput] = useState(false); 
   const [error, setError] = useState("");

   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleTitle = (select) => {
      setTitle(select);
      setUser({ ...user, userType: select });
      if (select === "Admin") {
         setShowPasswordInput(true);
         setShowAgentPasswordInput(false);
         setIsAdmin(true);
      } else if (select === "Agent") {
         setShowAgentPasswordInput(true);
         setShowPasswordInput(false);
         setIsAdmin(false);
      } else {
         setShowPasswordInput(false);
         setShowAgentPasswordInput(false);
         setIsAdmin(false);
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (isAdmin && adminPassword !== "9100963681") {
         setError("Invalid Admin Password.");
         return;
      }
      if (title === "Agent" && agentPassword !== "9100963681") {
         setError("Invalid Agent Password.");
         return;
      }

      const updatedUser = { ...user, userType: title, agentPassword }; 
      try {
         const res = await axios.post("http://localhost:8000/SignUp", updatedUser);
         alert("Record submitted");
         console.log(res.data.user);
      } catch (err) {
         console.log(err);
      }
      setUser({
         name: "",
         email: "",
         password: "",
         phone: "",
         userType: ""
      });
      setAdminPassword("");
      setAgentPassword(""); 
      setError("");
   };

   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand><b>RESOLVE NOW</b></Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'} className={`nav-link text-light`}>
                        <b>Home</b>
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link to={'/signup'} className={`nav-link text-light`}>
                        <b>SignUp</b>
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link to={'/login'} className={`nav-link text-light`}>
                        <b>Login</b>
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <section className="gradient-custom">
            <div className="container">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">
                           <div className="mb-md-5 mt-md-4 pb-5">
                              <h2 className="fw-bold mb-4 ">SignUp For Registering your Complaint</h2>
                              <p className="text-white-50 mb-4"><b><u>Please Enter Your Details</u></b></p>
                              <form onSubmit={handleSubmit}>
                                 <div className="form-outline form-white mb-4">
                                    <input type="text" name="name" value={user.name} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="name"><b>Full Name </b></label>
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="email"><b>Email </b></label>
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                    <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="password"><b>Password</b></label>
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                    <input type="tel" name="phone" value={user.phone} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="mobile"><b>Mobile No.</b></label>
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                    <Dropdown>
                                       <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                          {title}
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu>
                                          <Dropdown.Item onClick={() => handleTitle("Ordinary")}>Ordinary</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Admin")}>Admin</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Agent")}>Agent</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                    <label className="form-label"><b>Select User Type</b></label>
                                 </div>
                                 {showPasswordInput && (
                                    <div className="form-outline form-white mb-4">
                                       <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="form-control form-control-lg" required />
                                       <label className="form-label" htmlFor="adminPassword"><b>Admin Password</b></label>
                                       {error && <p className="text-danger">{error}</p>}
                                    </div>
                                 )}
                                 {showAgentPasswordInput && (
                                    <div className="form-outline form-white mb-4">
                                       <input type="password" value={agentPassword} onChange={(e) => setAgentPassword(e.target.value)} className="form-control form-control-lg" required />
                                       <label className="form-label"><b>Agent Password</b></label>
                                       {error && <p className="text-danger">{error}</p>}
                                    </div>
                                 )}
                                 <button className="btn btn-outline-light btn-lg px-5 mt-3" type="submit"><b>Register</b></button>
                              </form>
                           </div>
                           <div>
                              <p className="mb-0">Had an account?<Link to={"/Login"}>Login</Link></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default SignUp;



