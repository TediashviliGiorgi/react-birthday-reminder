import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return (
  
    <main>
      <section className = 'container'>
        <strong><h2>Birthday reminder</h2></strong>
        <h3>{people.length} beirthdays today</h3>
        <List people = {people}/>
        <button onClick = {() => setPeople([])}> Clear all</button>
      </section>
    </main>
  )
}

export default App;
