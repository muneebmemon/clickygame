// Main App component

import React from 'react';
import GameBoard from './components/GameBoard'
import Header from './components/Header'

const App = () => {
    return (
        <div>
            <Header />
            <GameBoard />
        </div>
    );
};

export default App;