import React from 'react';
import './App.css';
import Navbar from './components/dojoAppNavbar';
import Home from './components/dojoAppHome';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';

function App() {
  return (
    <div className="App">
        <Navbar/>
       <div className="content">
        
          <Home/>
        </div>

      {/* properties are defined/assigned here and called at the Greet Dir
      <Greet name='Bruce' heroName='Batman'>
        This is children props
      </Greet>
      <Greet name='Clark'heroName='Superman'>
        <button>ACTION</button>
      </Greet>
      <Greet name='Diana' heroName='Wonderwoman'>
        The best of them all.
      </Greet>

      {/* properties are defined/assigned here and called at the Hello Dir */}
      {/* <Hello /> */}

      {/* properties are defined/assigned here and called at the Message Dir */}
      {/* <Welcome/>  */}

      {/* properties are defined/assigned here and called at the Welcome Dir */}
      {/* <Message/> */}
    </div>
  );
}

export default App;
