import React from 'react';

import './page.css'
class About extends React.Component {

	render() {

		return (
		<div className='ui center aligned segment' id='about'>
			<h2> About me </h2>
			 <img className ="ui centered medium circular image" src="https://avatars1.githubusercontent.com/u/42336393"/><br></br>

			 <h3>Amal Santhosh</h3>
			 <h5>Powered by React <i className="react icon" style={{color:'#0fbcbf'}}></i><i className="heart icon" style={{color:'red'}}></i>. </h5>
			 <a className="item">
		    <div className="ui purple horizontal label">Web developer</div>
		  </a> <a className="ui green label">@amalsan</a><br/><br/>
		  <div id = 'about-2'>
		    <i className="instagram icon"></i>
			<i className="github icon"></i>
			<i className="google icon"></i>
			</div>
		</div>


			)
	};
}

export default About;