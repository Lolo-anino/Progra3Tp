import React from "react";
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './components/Index/Index';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';



function App() {

  return (
    
    <React.Fragment>
    <Header />

    <Index>
      <Switch>
        <Route path='/' exact={true} component={Index} />
        <Route path='' component={NotFound} />
      </Switch>
    </Index>

    <Footer/>
    
  </React.Fragment>





  );
}

export default App;
