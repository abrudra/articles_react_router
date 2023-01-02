import { Component } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Articles from "./Articles";
import Nopage from "./Nopage";
import Arcticle from "./Arcticle";


class Aside extends Component{
    render(){
        return (
          <div className="aside-class">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="articles" element={<Articles />} />
              <Route path="*" element={<Nopage />} />
              <Route path="articles/:slug" element={ <Arcticle /> }/> 
              
            </Routes>
          </div>
        );
    }
}

export default Aside;