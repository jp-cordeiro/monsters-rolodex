import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret"
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette"          
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha"
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne"
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren"
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery"
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles"
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow"
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton"
        }
      ]
    };
  }

  componentDidMount(){    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){
    return (
      <div className="App" >
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>      
    );
  } 
}

export default App;
