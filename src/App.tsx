import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ListaTodos } from './components/organisms/ListaTodos';
import { TodosContextProvider } from './context/use-todos';

function App() {
  return (
    <TodosContextProvider>
      <ListaTodos/>
    </TodosContextProvider>
  );
}

export default App;
