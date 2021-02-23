import React, { useState } from 'react';
import { ThemeProvider, css } from 'styled-components';
import './App.css';
import Card from './Card';
import styled from 'styled-components';

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

//Custom design using ~styled-components
const Button = styled.button`
  ${props =>
    props.color && css `
      background-color: ${props=>props.length > 2 ? props.theme[props.color] : props.length < 2 ? 'red' : 'pink'};
      color: ${props=>props.length <= 1 ? 'white' : 'black'};
    `
  }
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`

function App() {
  const [cards, setCards] = useState([
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
  ])
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard)
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
  }
  const changedNameHandler = (event, id) => {
    //1. Which Card
    const cardIndex = cards.findIndex(card => card.id == id)
    //2. Make a copy of the Cards
    const cards_copy = [...cards]
    //3. Changed the name of the specific card
    cards_copy[cardIndex].name = event.target.value
    //4. Set the cards with the latest version of card copy
    setCards(cards_copy)
  }
  // const buttonStyle = {
  //   backgroundColor: null
  // }

  const classes = ['button']

  if(cards.length < 3) classes.push('pink')
  if(cards.length < 2) classes.push('red')

  const cardsMarkup = (
    cards.map((card, index) =>
      showCard &&
      <Card
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        key={card.id}
        onDelete={()=>deleteCardHandler(index)}
        onChangeName={(event)=>changedNameHandler(event, card.id)}
      />
    )
  )
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="mango" length={cards.length}>Toggle</Button>
        <button className={classes.join(' ')} onClick={toggleShowCard}>Toggle Show/Hide</button>
        {cardsMarkup}
      </div>
   </ThemeProvider>
  );
}

export default App;
