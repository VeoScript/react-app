import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {

  const [name, setName] = useState('Alan Smith')

  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  )

  const changeNameHandler = name => setName(name)

  const changeInputHandler = event => setName(event.target.value)

  return (
   <div className="App">
     <button className="button" onClick={()=>changeNameHandler('Chelyn Hermosilla')}>Change Name</button>
     <Card
      avatar='http://placeimg.com/640/480/people'
      name={name}
      title={faker.name.jobTitle()}
      onChangedName={()=>changeNameHandler('Jerome Villaruel')}
      onChangeInput={changeInputHandler}
    >
      {buttonsMarkup}
    </Card>
   </div>
  );
}

export default App;
