import React from "react";

import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './components/Index/Index';
import NotFound from './components/NotFound/NotFound';
import MusicDetail from "./screens/MusicDetail/MusicDetail";
import Footer from './components/Footer/Footer';
import Todas from './components/Todas/Todas';
/* import DetalleCancion from './components/DetalleCancion/DetalleCancion';
import DetalleAlbum from './components/DetalleAlbum/DetalleAlbum'; */


function App() {

  return (
    
    <React.Fragment>
    <Header />

    <main>
      <Switch> 
        <Route path='/' exact={true} component={Index} />
        {/* <Route path='/album/id/:id' component={DetalleAlbum}/> */}
       {/* <Route path='/cancion/id/:id' component={DetalleCancion}/> */} 
        <Route path='/all' component={Todas} />
        <Route path='/music/id:id' component={MusicDetail} />
        <Route path='' component={NotFound} />
      </Switch>
    </main>
    <Footer />
    
    </React.Fragment>





  );
}

export default App;
