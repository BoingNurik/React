import Header from './components/header/header';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import Nav from './components/nav/nav';
import './App.css';



const App = (props) => {
  return (
      <div className="App-wrapper">
        <Header />
        <Nav />
        <div class='App-wrapper-content'>
          
          <Profile></Profile>
        </div>
      </div>

  );
}

export default App;
