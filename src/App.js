import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

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
  const buttonStyle = {
    backgroundColor: null
  }

  if(cards.length < 3) buttonStyle.backgroundColor = 'lightpink';
  if(cards.length < 2) buttonStyle.backgroundColor = 'red';

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
   <div className="App">
    <button className="button" style={buttonStyle} onClick={toggleShowCard}>Toggle Show/Hide</button>
    {cardsMarkup}
   </div>
  );
}

export default App;
