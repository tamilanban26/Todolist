import React from 'react'
import TodoForm from './Component/TodoForm'


function App() {
  return (
    <>
      <TodoForm />
     
    
    </>
  )
}

export default App









// // import { Box } from '@mui/material'
// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Head from './Component/Head'

// function App() {
//   return (
//    <>
//         <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Head/>} />
//         </Routes>
//         </BrowserRouter>
//         </>  

    
//   )
// }

// export default App











// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import Header from './Component/Header'
// // import TeamsPage from './Component/TeamsPage'
// // import TeamDetails from './Component/TeamDetails'
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import LoginPage from "./Component/LoginPage";

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //     {/* <Header/> */}
// //     <Router>
// //     <BrowserRouter>
// //   <Routes>
// //     <Route path='/' element={<TeamsPage />} />
// //     <Route path='/team/:name' element={<TeamDetails />} />
// //     <Route path='/team/:login' element={<LoginPage />} />
// //   </Routes>
// // </BrowserRouter>
// // </Router>
// //  </>
// //   )
// // }

// // export default App
// // import React, { Component } from 'react';

// // class ResumeBuilder extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       name: '',
// //       email: '',
// //       phone: '',
// //       skills: '',
// //       summary: '',
// //       submitted: false
// //     };
// //   }

// //   handleChange = (e) => {
// //     this.setState({ [e.target.name]: e.target.value });
// //   };

// //   handleSubmit = (e) => {
// //     e.preventDefault();
// //     this.setState({ submitted: true });
// //   };

// //   render() {
// //     const { name, email, phone, skills, summary, submitted } = this.state;

// //     return (
// //       <div style={{ padding: '20px' }}>
// //         <h2>Resume Builder (Class Component)</h2>
// //         <form onSubmit={this.handleSubmit}>
// //           <input type="text" name="name" placeholder="Name" onChange={this.handleChange} /><br /><br />
// //           <input type="email" name="email" placeholder="Email" onChange={this.handleChange} /><br /><br />
// //           <input type="tel" name="phone" placeholder="Phone" onChange={this.handleChange} /><br /><br />
// //           <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={this.handleChange} /><br /><br />
// //           <textarea name="summary" placeholder="Summary" onChange={this.handleChange}></textarea><br /><br />
// //           <button type="submit">Build Resume</button>
// //         </form>

// //         {submitted && (
// //           <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px' }}>
// //             <h3>Resume Preview</h3>
// //             <p><strong>Name:</strong> {name}</p>
// //             <p><strong>Email:</strong> {email}</p>
// //             <p><strong>Phone:</strong> {phone}</p>
// //             <p><strong>Skills:</strong> {skills}</p>
// //             <p><strong>Summary:</strong> {summary}</p>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }
// // }

// // export default ResumeBuilder;
