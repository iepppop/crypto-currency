import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';
import Banner from './components/Banner';

function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Contain>
        <Header />
        <Banner />
      </Contain>
    </Wrap>
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
