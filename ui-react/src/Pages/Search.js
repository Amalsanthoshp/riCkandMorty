import React from 'react';
import Card from '../Components/Card';

class Search extends React.Component {

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
  	let card = this.state.isDataSet ?
    <Card 
     img={this.state.character.image} 
     name={this.state.character.name} 
     gender={this.state.character.gender} 
     status= {this.state.character.status}
     species={this.state.character.species}
     origin={this.state.character.origin}
      />
    :'No results for you try to search with numbers...'

    return (
    	<>
 		<div className="ui raised segment">
		    <div className="ui two column grid">
		      <div className="column">
		      <form className="ui form">
		      <div className="field">
		        <label>Search Characters</label>
		        <p> You can search your Rick and Morty characters using numbers ;)</p>
		        <input type="text" name="input" placeholder="Name" onChange={this.handleChange} required/>
		      </div>
		      <button className="ui button" type="button" onClick={this.handleClick}>Submit</button>
		      </form>
		      </div>
		      <div className="column" style={{marginBottom:'2rem'}}>
		      {card }
		      </div>
		      </div>
		    </div>        
		 </>
      )
  };
}

export default Search;