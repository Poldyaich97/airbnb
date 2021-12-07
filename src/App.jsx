import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const AppHeader = styled(Header)`
  margin-bottom: 50px;
`;

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
