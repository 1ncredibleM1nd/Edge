import React from 'react';
import AppHeader from "./components/app-header";
import NavigatorIndicators from "./components/navigator-indicators";
import Footer from "./components/footer";
import './sass/App.sass'
import Carousel from "./components/command";
import Services from "./components/services";
import Projects from "./components/projects";
function App() {
  return (
    <div className="App">
    <AppHeader/>
    <div className="site-body">
        <NavigatorIndicators/>
        <Projects/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
