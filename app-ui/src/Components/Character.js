import React from 'react'


class Character extends React.Component {
    constructor(){
        super()
        this.state ={
            isDataset:false,
            character:{}
        }
        this.fetchDetails =this.fetchDetails.bind(this)
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
    
    componentDidMount() {
        
        this.fetchDetails(1)
    }
    
    render(){
        const styles = {
            flex:'auto',
            margin:'auto',
            shadowColor: '#000000',
             shadowOffset: {
             width: 0,
             height: 3},
             shadowRadius: 5,
             shadowOpacity: 1.0,
             
         }
        return(
    <div style={{marginTop:'20px'}}>
        <div className="ui red card vertical " style={styles}>
            <div className="image"><img src={this.state.character.image} alt='photo'/></div>
                <div className="content">
                  <div className="header"> Name : {this.state.character.name}</div><br></br>
                    <div className="summary">Status : {this.state.character.status}</div>
                   <div className="summary">Gender : {this.state.character.gender}</div>
                <div className="summary">Species: {this.state.character.species}</div>
             </div>
        </div>
    </div>
        )
    }
}

export default Character