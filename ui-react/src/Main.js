import React, { Component } from "react";
import {
  Route,Switch,
  NavLink,IndexRoute,
  HashRouter,BrowserRouter as Router
} from "react-router-dom";
import Home from "./Pages/Home";
import Character from './Pages/Character';
import About from './Pages/About';
import Search from './Pages/Search';
import './Main.css'

class Main extends Component {

	render() {

		return(
    <Router>
  		<div>
          <div className="container">
          <div className="ui pointing menu" id ="nav">
          <div className="header item">
          <img className="ui avatar image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscreenrant.com%2Fwp-content%2Fuploads%2F2017%2F03%2FRickAndMortyFeature.jpg&f=1&nofb=1"/>
            Rick and Morty

          </div>
          <a className="item">
            <NavLink exact to="/cronenberg-137">Home</NavLink>
          </a>
          <a className="item">
            <NavLink exact to="/character">Characters</NavLink>
          </a>
          <a className="item">
            <NavLink exact to="/search">Search</NavLink>
          </a>
          <a className="item">
            <NavLink exact to="/about">About</NavLink>
          </a>
        </div>
           <div>
              <img  className="ui image" src ='https://static3.srcdn.com/wordpress/wp-content/uploads/2018/04/Rick-and-Morty-Season-4-Logo.jpg' alt='image' style={{width:'100%',height:'100%'}}></img>
           </div>
              <Route exact path="/cronenberg-137" component={Home}/>
              <Route path="/character" component={Character}/>
              <Route path='/search' component={Search}/>
              <Route path="/about" component={About}/> 
            </div>
      </div>
    </Router>
		);
	}
}

export default Main;