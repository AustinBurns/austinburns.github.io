import * as React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <Header />
        <Home />
        <Footer />
      </section>
    );
  }
}

export default App;
