import React, { Component } from 'react';
import MemoryGame from './Components/MemoryGame';
import './App.css'

class App extends Component {
    render()  {
        return (
            <div className="App">
                <header className="App-header">Memory Game</header>
                <section className="App-container">
                    <MemoryGame />
                </section>
                <section className="App-footer"></section>
            </div>
        );
    }
}

export default App;