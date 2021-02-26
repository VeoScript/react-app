import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Card from './Card';
import Button from './Element/Button';

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

class App extends Component {
  constructor(props) {
    console.log('App js constructor');
    super(props)
    this.state={
      cards: [
        {
          id: 1,
          name: 'Magpakailan Tamad',
          title: 'Hindi Magbabago',
          avatar:'http://placeimg.com/640/480/people'
        },
        {
          id: 2,
          name: 'Magpakailan Jakol',
          title: 'Sige Rag Lusi',
          avatar:'http://placeimg.com/640/480/people'
        },
        {
          id: 3,
          name: 'Magpakailan Tamod',
          title: 'Pirme Pasirit',
          avatar:'http://placeimg.com/640/480/people'
        }
      ],
      showCard: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props)
    return state
  }
  
  componentDidMount() {
    console.log('App js componentDidMount')
  }

  toggleShowCard = () => this.setState({showCard:!this.state.showCard})
  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    console.log('cards_copy', cards_copy)
    console.log('cards', this.state.cards)
    this.setState({
      cards:cards_copy
    })
  }
  changedNameHandler = (event, id) => {
    //1. Which Card
    const cardIndex = this.state.cards.findIndex(card => card.id === id)
    //2. Make a copy of the Cards
    const cards_copy = [...this.state.cards]
    //3. Changed the name of the specific card
    cards_copy[cardIndex].name = event.target.value
    //4. Set the cards with the latest version of card copy
    this.setState({
      cards:cards_copy
    })
  }

  render() {
    console.log('App js render')
    const classes = ['button']

    if(this.state.cards.length < 3) classes.push('pink')
    if(this.state.cards.length < 2) classes.push('red')

    const cardsMarkup = this.state.showCard && (
      this.state.cards.map((card, index) =>
        <Card
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          key={card.id}
          onDelete={()=>this.deleteCardHandler(index)}
          onChangeName={(event)=>this.changedNameHandler(event, card.id)}
        />
      )
    )
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="mango" length={this.state.cards.length} onClick={this.toggleShowCard}>Toggle</Button>
          <button className={classes.join(' ')} onClick={this.toggleShowCard}>Toggle Show/Hide</button>
          {cardsMarkup}
        </div>
    </ThemeProvider>
    );
  }
}

export default App;
