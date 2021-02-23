import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {
  const [cards, setCards] = useState([
    {
      name: 'Magpakailan Tamad',
      title: 'Hindi Magbabago',
      avatar:'http://placeimg.com/640/480/people'
    },
    {
      name: 'Magpakailan Jakol',
      title: 'Sige Rag Lusi',
      avatar:'http://placeimg.com/640/480/people'
    },
    {
      name: 'Magpakailan Tamod',
      title: 'Pirme Pasirit',
      avatar:'http://placeimg.com/640/480/people'
    }
  ])
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard)
  const cardsMarkup = (
    cards.map(card=>
      showCard &&
      <Card
        avatar={card.avatar}
        name={card.name}
        title={card.title}
      />
    )
  )
  return (
   <div className="App">
    <button className="button" onClick={toggleShowCard}>Toggle Show/Hide</button>
    {cardsMarkup}
   </div>
  );
}

export default App;
