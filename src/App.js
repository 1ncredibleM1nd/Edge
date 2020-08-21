import React from 'react';
import AppHeader from "./components/app-header";
import NavigatorIndicators from "./components/navigator-indicators";
import Footer from "./components/footer";
import './sass/App.sass'
function App() {
  return (
    <div className="App">
    <AppHeader/>

    <NavigatorIndicators/>
    <Footer/>
    </div>
  );
}

export default App;
