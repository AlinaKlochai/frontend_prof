import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { navItems } from './utils/constants';
import Main from './components/Main';

export interface IPageContext  {
  page: string, 
  setPage: (newValue: string) => void
}

//1. Срздание контекста
export const PageContext = createContext< IPageContext | null >(null)


const App: React.FC = () => {
  const [page, setPage] = useState(navItems[0]);


  console.log(page);


  return (
    <div className="App">

      {/* 2. Передача контекстом */}
      <PageContext.Provider value={{ page, setPage}}>
        <Header />
        <Main />
      </PageContext.Provider>
    </div>
  );
};

export default App;
