import React from 'react';
import Card from '../Components/Card';

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
            <p>Different versions of the characters inhabit other dimensions throughout the multiverse and their personal characteristics can vary from one reality to another. The show's original Rick identifies himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe, but this does not necessarily apply to every other member of the Smith household. For instance, in the first-season episode "Rick Potion #9", after turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving Summer, Beth and Jerry behind. </p>
       </div>     
		 </>
      )
  };
}

export default Home;