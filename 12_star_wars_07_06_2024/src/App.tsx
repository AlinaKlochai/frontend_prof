import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { navItems } from './utils/constants';

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
      <Footer />

    </div>
  );
};

export default App;
