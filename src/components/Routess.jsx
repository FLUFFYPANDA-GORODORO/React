import React from 'react'

import { Link,Routes,Route } from "react-router-dom";
import Home from "./Home"
import User from "./User"
import About from "./About"
import Userdetail from './Userdetail';

function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} >
            <Route path="/user/:name" element={<Userdetail />} />
        </Route>
        
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Routess
