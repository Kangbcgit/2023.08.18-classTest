import { Route, Routes } from 'react-router-dom';
import Header from './Component/Main/Header';
import GlobalStyle from './reset';
import ItemList from './Component/Main/ItemSection/ItemList';
import { useEffect, useState } from 'react';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import Data from './data/Data';

function App() {
  const [mainItemList, setMainItemList] = useState(Data);
  useEffect(() => {
  },[])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <ItemList itemList={mainItemList}/>
          </>
        } />
        <Route path='/컴퓨터&모바일' element={
          <>
            <ItemList itemList={mainItemList} viewCategory={'컴퓨터&모바일'}/>
          </>
         }/>
        <Route path='/로그인' element={
          <>
            <Login/>
          </>
         }/>
         
      </Routes>
      <Footer />
    </>
  );
}

export default App;
