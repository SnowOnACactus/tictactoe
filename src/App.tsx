import React from 'react';
import { Game } from './components/Game';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
}