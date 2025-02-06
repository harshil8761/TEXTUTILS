import React from 'react'
import { SocialIcon } from 'react-social-icons'


function footer() {
  return (
<div className="fixed-bottom" >
        <footer className="footer mt-auto py-3 bg-dark">
          <div className="container text-left text-light" align="center ">
              Made By 😎 Harshil Gohil &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
            <SocialIcon url="https://github.com/harshil8761" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://www.facebook.com/divyang.surani.1" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://gohilharshil858@gmail.com/" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </footer>
      </div>
      )
}

export default footer   