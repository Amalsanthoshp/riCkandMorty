import React from 'react';

import './page.css'
class About extends React.Component {

	render() {

		return (
		<div className='ui center aligned segment' id='about'>
			<h2> About me </h2>
			 <img className ="ui centered medium circular image" src="https://instagram.fcok1-1.fna.fbcdn.net/vp/26f4c4002d099936494350d9990c1246/5E2BFE83/t51.2885-15/e35/66950400_862466254139857_1548523287196076412_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_cat=101"/><br></br>

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