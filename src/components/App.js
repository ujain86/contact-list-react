import React, { Component, useState } from 'react';

import Navbar from './Navbar';
import ContactItem from './ContactItem';

class App extends React.Component {

  constructor(){

    super();

    this.state = {
      data: []
    }
  };



  async componentDidMount(){

    let url = 'https://jsonplaceholder.typicode.com/users';
    let data =  await fetch(url);
    let parsedData = await data.json();

    this.setState({
      data: parsedData
    })

  }

  render(){

  const data = this.state.data;

  return (  
    
    <div>

      <Navbar />

      <div className="App">
      {data.map((contact) => {
        return <ContactItem contact= {contact} key={contact.id} />
      })}
      </div>
      
    </div>
  );
}
}

export default App;
