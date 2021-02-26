import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  render() {
    console.log('Card js rendering...')
    return (
      <div className="container">
        <div className="card">
          <img src={this.props.avatar} alt="Avatar" style={{width: '100%'}} />
          <div className="container">
            <h4><b>{this.props.name}</b></h4> 
            <p>{this.props.title}</p> 
            <input type="text" onChange={this.props.onChangeName} value={this.props.name}/>
            <p><button className="button button-red" onClick={this.props.onDelete}>Delete</button></p>
            <div>{this.props.children}</div> 
          </div>
        </div>
      </div>
    )
  }
}

export default Card
