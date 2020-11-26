import React from 'react'

// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import HomePageWelcome from '../assets/images/homepage-welcome.jpg'

// import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

export default function HomePage(props) {

    return (
        <div className="homepage-container">
            <div className="homepage-intro"> 
                <div className="homepage-text">
                    {props.title && <h1 className="display-1 font-weight-bolder"> {props.title} </h1>}
                    {props.titleBis && <h1 className="display-1 font-weight-bolder"> {props.titleBis} </h1>}
                    {props.subTitle && <h3 className="dislay-4 font-weight-light"> {props.subTitle} </h3>}
                    {props.text && <h3 className="lead font-weight"> {props.text} </h3>}
                </div>
                <div className="homepage-image">
                    <img src={props.imgSrc} alt=""/>
                </div>
                <div className="arrow bounce"> </div>
            </div>
            <Carousel/>
        </div>
    )
}