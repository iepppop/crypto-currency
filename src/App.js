import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinsTable from './components/CoinsTable';

function App() {
  return (
    <BrowserRouter>
    <Wrap>
      <GlobalStyle />
      <Contain>
        <Header />
        <Banner />
        <Carousel />
        <CoinsTable />
      </Contain>
    </Wrap>
    </BrowserRouter>
  );
}

export default App;

const Wrap = styled.div`
  width:100vw;
  height:100vh;
  overflow:hidden;
`

const Contain = styled.div`
  max-width:100%;
  height:100%;
  position:relative;
`
