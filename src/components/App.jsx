import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Search from './Search/Search';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import './css/core.css';
import About from './About/About';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Contacts from './Contacts/Contacts';
import Journal from './Journal/Journal';
import JournalInside from './Journal/components/JournalInside';
import ShopInside from './ShopInside/ShopInside';

function App() {
  return (
    <Router>
      <Header />
      <Search />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/journal" exact component={Journal} />
        <Route path="/journal/:id" exact component={JournalInside} />
        <Route path="shop/:id" exact component={ShopInside} />
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
