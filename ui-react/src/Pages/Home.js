import React from 'react';
import Card from '../Components/Card';
import './page.css'

class Home extends React.Component {

	constructor() {
		super()
		this.state  = {
			character:{},
			isLoading:true,
			isDataSet:false,

		}
	this.handleChange =this.handleChange.bind(this);
    this.handleClick =this.handleClick.bind(this);
    this.fetchDetails =this.fetchDetails.bind(this);
   }
   componentDidMount() {
    this.fetchDetails(1)
  }

  handleChange(e) {
      e.target.name = e.target.value
      this.setState({
        input:e.target.value
      })

  }
  fetchDetails(inp) {
    if (inp!== ''){

    const url = "https://rickandmortyapi.com/api/character/" + inp


    fetch(url).then(res => {
      if(res.status === 200) {
          return res.json()
      }
      else return null;
      }).then(data => {
      if(data!==null)  {
          this.setState({
              character:data,
              isDataSet: true
          });
      } else {
          this.setState({
              isDataSet: false
          });
      }
    });
  }}
  handleClick() {
    this.fetchDetails(this.state.input);

  }
  render() {
    return (
    	<> 
		 <div className="ui  raised segment" style={{borderBottom:'0'}}>
	        <div className='ui header'> Rick and Morty</div>
	         <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.</p>
	     </div>
       <div className="ui  raised segment" style={{borderBottom:'0'}}>
          <div className='ui header'> Premise and Characters</div>
            <p>The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington.[3] The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car.</p>
            <p>Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family.</p>
        <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
             <div className="ui link cards">
              <div className="card" id='card'>
                <div className="image">
                <img src="https://d.ibtimes.co.uk/en/full/1645547/rick-morty.jpg"/>
                </div>
                <div className="content">
                  <div className="header">Rick Sanchez and Morty Smith</div>
                  <div className="meta">
                    <a>Adult Swim</a>
                  </div>
                  <div className="description">
                    A Scene from <a className="ui teal tag label">Season 4</a>
                  </div>
                </div>
                </div>
                </div>
          </div>
          <div className="column">
              <p>Following the conclusion of the show's third season, co-creators Harmon and Roiland wanted to have assurance that there would be many more seasons of Rick and Morty in the future, so that they would be able to focus on the show and minimize their involvement in other projects.</p>
              <p> Additionally, Harmon had expressed his wish for the upcoming fourth season to consist of more than ten episodes.</p>
              <p> In May 2018, after prolonged contract negotiations, Adult Swim announced a long-term deal with the creators, ordering 70 new episodes over an unspecified number of seasons.</p>
          </div>
            <p> In a June 2018 interview with Polygon, Justin Roiland was confident that this big renewal deal will allow the creators to minimize the gaps between seasons, as they will be able to schedule their time around the show and "keep the machine going." In May 2019, at WarnerMedia's 2019 Upfronts presentation, the fourth season of Rick and Morty was announced to debut in November 2019. In a July 2019 interview with Entertainment Weekly, Roiland confirmed that the fourth season will consist of ten episodes.</p>
        </div>
      </div> 
      </div>    
		 </>
      )
  };
}

export default Home;