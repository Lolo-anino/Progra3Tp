import React from "react";

import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './screens/Index/Index';
import NotFound from './screens/NotFound/NotFound';
import MusicDetail from "./screens/MusicDetail/MusicDetail";
import Footer from './components/Footer/Footer';
import Todas from './components/Todas/Canciones';
import Todos from './screens/Todas/Albumes';
import DetalleCancion from './screens/Detalle/DetalleCancion';
/* import DetalleAlbum from './components/DetalleAlbum/DetalleAlbum';  */


function App() {

  return (
    
    <React.Fragment>
    

    <main>
      <Header/>
      <Switch> 
        <Route path='/' exact={true} component={Index} />
        <Route path='/search-result/:busqueda' exact={true} component={Index} />
        {/* <Route path='/album/id/:id' component={DetalleAlbum}/> */}
        <Route path='/canciones/:id' component={DetalleCancion}/> 
        <Route path='/allsongs' component={Todas} />
        <Route path='/allalbums' component={Todos} />
        <Route path='/music/id:id' component={MusicDetail} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer/>
    </main>
    
    
    </React.Fragment>





  );
}

export default App;
