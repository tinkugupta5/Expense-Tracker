import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import './App.css';
import Expenses from './components/Expenses';
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <Expenses/>
        <TransactionList/>
        <AddTransaction/>

      </div>
    </>

  );
}

export default App;