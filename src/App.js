import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import './App.css';

import Shop from './components/Shop';
//import Tickets from './components/Tickets';
import Events from './components/Events';
import Error from './components/Error';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Redirect to = '/events' component={ Events } />
          </Route>

          <Route   path='/events' component={ Events }/>
          

          
           <Route   path='/buy' component={ Shop }/>  

         
          {/*  <Route  path='/tickets/:id' component={ Tickets }/>  */}


          <Route component={ Error } />

        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
