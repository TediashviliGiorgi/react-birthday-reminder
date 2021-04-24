import React from 'react';

const List = ({people}) => {
  return (
    <>
    {people.map((person) =>{
      return(
        <article key = {person.id} className = 'person'>
          <img src = {person.image} alt = 'personImg' ></img>
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years old</p>
          </div>
        </article>
      )
    })}
      <h2>list component</h2>
    </>
  );
};

export default List;
