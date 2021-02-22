import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {

  const [name, setName] = useState('Jerome Villaruel')
  const [showCard, setShowCard] = useState(true)
  const changeNameHandler = name => setName(name)
  const changeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard)
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  )
  const cardsMarkup = (
    showCard &&
    <Card
      avatar='http://placeimg.com/640/480/people'
      name={name}
      title={faker.name.jobTitle()}
      onChangedName={()=>changeNameHandler('Chelyn Hermosilla')}
      onChangeInput={changeInputHandler}
    >
      {buttonsMarkup}
    </Card>
  )
  return (
   <div className="App">
    <button className="button" onClick={toggleShowCard}>Toggle Show/Hide</button>
    {cardsMarkup}
   </div>
  );
}

export default App;
