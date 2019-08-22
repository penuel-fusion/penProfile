import React from 'react';
import Header from './components/Header';
import Experiences from './components/Experience';
import Educat from './components/Education';
import Contact from './components/Contact';
import "animate.css/animate.min.css";



function App() {



  return (
    <div>

              < Header />

             <span className= "App4">
             <h1>Experience</h1>
             <Experiences Period="March 2019 - Date" Position="IT Officer" Company="LAINE Services Limited" Duties="IT Team Manager & IT support to all branches"/>
                   <Experiences Period="July, 2015 - March 2019" Position="IT Executive" Company="LAINE Services Limited" Duties="IT support to all branches & diagnosis of IT issues"/>
                   <Experiences Period="July, 2014 - July 2015" Position="IT Assistant(NSS)" Company="LAINE Services Limited" Duties="IT support to all branches & assist diagnosis of IT issues"/>
                   <Experiences Period="November, 2012 -February, 2013" Position="Lab/Teaching Assistant " Company="Radford University" Duties="Assisted with IT duties at the lab & Tutoring students"/>
             </span>
              
    
       
                <span className= "App2">
                <h1>Education</h1>
                    <Educat Course="Full Stack Developer" Institution="Codewit" Period ="2019"/>
                    <Educat Course= "BSC ICT"  Institution="Radford University" Period ="2010 -2014" />
                    <Educat Course = "Project Management"  Institution="Landmark Institute"  Period ="2011"/>
                    
              </span>
      
              <span className ="App3">

                    < Contact />
              </span>
       
      
    </div>
  );
}

export default App;
