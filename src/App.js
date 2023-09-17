
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';


const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg,#002F52 35%,#326589);
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Content/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
