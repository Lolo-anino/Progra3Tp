import React from "react";

import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './screens/Index/Index';
import NotFound from './screens/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Todas from './screens/Todas/Canciones';
import Todos from './screens/Todas/Albumes';
import DetalleCancion from './screens/Detalle/DetalleCancion';
import DetalleAlbum from './screens/Detalle/DetalleAlbum';
import Playlist from './screens/Favoritos/Favoritos';


function App() {

  return (
    
    <React.Fragment>
    

    <main>
      <Header/>
      <Switch> 
        <Route path='/' exact={true} component={Index} />
        <Route path='/search-result/:busqueda' exact={true} component={Index} />
        <Route path='/albumes/:id' component={DetalleAlbum}/>
        <Route path='/canciones/:id' component={DetalleCancion}/> 
        <Route path='/allsongs' component={Todas} />
        <Route path='/allalbums' component={Todos} />
        <Route path='/playlist' component={Playlist} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer/>
    </main>
    
    
    </React.Fragment>





  );
}

export default App;
