import React from 'react'

import emailjs from 'emailjs-com'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Hero from '../components/Hero'
import Content from '../components/Content'

export default function ContactPage(props) {

    function sendEmail(event){
        event.preventDefault()
        emailjs.sendForm('service_34jsrh3', 'template_8txbhop', event.target, 'user_AiQI8wjmKk3Err1oeobmD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
        event.target.reset()
    }

    return (
        <div>
            <Hero title={props.title}/>
            <Content>
                <Form onSubmit={sendEmail}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">
                            Nom complet
                        </Form.Label>
                        <Form.Control id="full-name" name="name" type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="email">
                            Email
                        </Form.Label>
                        <Form.Control id="full-email" name="email" type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="subject">
                            Subject
                        </Form.Label>
                        <Form.Control id="full-subject" name="subject" type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="full-message">
                            Message
                        </Form.Label>
                        <Form.Control id="full-message" name="message" as="textarea" rows="3"/>
                    </Form.Group>
                    <Button className="d-inline-block" variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Content>
        </div>
    )
}