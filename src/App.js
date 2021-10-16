import React from 'react';
import NavBar from './components/layout/NavBar/NavBar';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Movies from './components/views/Movies/Movies';
import Tickets from './components/views/Tickets/Tickets';
import Confirm from './components/views/Confirm/Confirm';
import Footer from './components/layout/Footer/Footer';
import './styles/global.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies' component={Movies} />
            <Route exact path='/tickets' component={Tickets} />
            <Route exact path='/confirm' component={Confirm} />
          </Switch>
        </MainLayout>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
