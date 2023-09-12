import React from "react";

import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './components/Index/Index';
import NotFound from './components/NotFound/NotFound';
import MusicDetail from "./screens/MusicDetail/MusicDetail";
import Footer from './components/Footer/Footer';
import Todas from './components/Todas/Todas'


function App() {

  return (
    
    <React.Fragment>
    <Header />

    <main>
      <Switch>
        <Route path='/' exact={true} component={Index} />
        <Route path='' component={NotFound} />
        <Route path='/all' component={Todas} />
        <Route path='/music/id:id' component={MusicDetail} />
      </Switch>
    </main>
    <Footer />
    
    </React.Fragment>





  );
}

export default App;
