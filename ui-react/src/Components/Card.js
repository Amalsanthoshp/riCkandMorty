import React from 'react';



class Card extends React.Component {

    render() {
        const styles = {
            flex:'auto',
            margin:'1em',
            
        }
        let style = this.props.noflex == 'true' ? "margin:'1em'": styles
        return (
            <div className="ui black card vertical column " style={styles}>
                <div className="image"><img src={this.props.img} alt='photo'/></div>
                <div className="content">
                    <div className="header"> Name : {this.props.name}</div><br></br>
                    <div className="summary">Status : {this.props.status}</div>
                    <div className="summary">Gender : {this.props.gender}</div>
                    <div className="summary">Species: {this.props.species}</div>
                 </div>
            </div>
        )
    };
}




export default Card;