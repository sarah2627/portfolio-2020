import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function TitleHomePage (props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0"> 
            <Container fluid={true}>
                <Row className="py-5">
                    <Col className="px-0">
                        {props.titlePart && <h1 className="display-1 font-weight-bolder"> {props.titlePart} </h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}