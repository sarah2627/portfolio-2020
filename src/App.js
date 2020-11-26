import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css'

import HomePageWelcome from './assets/images/homepage-welcome.jpg'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Sarah Veysset',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Hello,',
        titleBis: 'I\'m Sarah',
        subTitle: 'Web developer front-end',
        text: 'Checkout my projects below',
        imgSrc: HomePageWelcome,
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s talk'
      }
    } 
  }

  render() {
    return (
      <Router> 
        <Container className="p-0" fluid={true}> 
          <Navbar className="navbar" expand="lg"> 
            <Link className="nav-link" to="/"> Sarah Veysset </Link>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-collapse"> 
              <Nav className="ml-auto"> 
                <Link className="nav-link" to="/"> Home </Link>
                <Link className="nav-link" to="/about"> About </Link>
                <Link className="nav-link" to="/contact"> Contact </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render = {() => <HomePage title={this.state.home.title} titleBis={this.state.home.titleBis} subTitle={this.state.home.subTitle} text={this.state.home.text} imgSrc={this.state.home.imgSrc}/>} />
          <Route path='/about' render = {() => <AboutPage title={this.state.about.title}/>} />
          <Route path='/contact' render = {() => <ContactPage title={this.state.contact.title}/>} />

          <Footer/>

        </Container>
      </Router>
    )
  }
}
