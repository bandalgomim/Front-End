"use client"

import { FloatingLabel, Form, Button, InputGroup, Collapse, Card } from "react-bootstrap";
import { useState } from "react";

export default function SignUp () {

    const [ emailIsInvalid, setEmailIsInvalid ] = useState(true);
    const [ isInvalid, setIsInvalid ]= useState(false);
    const [ codeCheck, setCodeCheck ] = useState(false);
    const [ userCode, setUserCode ] = useState(null);
    const [ severCode, setSeverCode ] = useState('1234');
    const [ codeButtonIsInvalid, setCodeButtonIsInvalid ] = useState(true);
    const [ user, setUser ] = useState({ email:"", password:"", nickname:"" });
    
 
    const CheckEmail = (str) => {                                                 
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(str)) {                            
            return false;         
        }else {                       
            return true;         
        }                            
    }

    const handleCodeChange = (e) => {
        setUserCode(e.target.value)
        if(e.target.value === severCode) {
            setCodeButtonIsInvalid(false);
        }else {
            setCodeButtonIsInvalid(true);
        }
    }
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.type]: e.target.value
        })
        if(CheckEmail(e.target.value)===true) {
            console.log("이메일 형식 확인")
            setEmailIsInvalid(false)
            setIsInvalid(false)
        }else if(CheckEmail(e.target.value)!==true) {
            console.log("이메일 형식 확인")
            setEmailIsInvalid(true)
        }
    }
    
    const group = <InputGroup className="mb-3">
        <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
      Button
        </Button>
    </InputGroup> 

    return <>
        <InputGroup className="mb-3">
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control
                    isInvalid={ isInvalid }
                    type="email" placeholder="name@example.com" onChange={ handleChange } 
                    onKeyDown={ 
                        (e) => {
                            if(e.key == "Enter" && CheckEmail(user.email)===true) {
                                setIsInvalid(false)
                                setCodeCheck(true)
                            }else if(e.key == "Enter" && CheckEmail(user.email)!==true) {
                                setIsInvalid(true)
                                setCodeCheck(false)
                            }
                        }
                    }
                />
                <Form.Control.Feedback type="invalid">
                    이메일 형식을 지키거라
                </Form.Control.Feedback>
            </FloatingLabel>
            <Button className="test" variant="outline-secondary" as="input" type="button" value="코드 전송" disabled={ emailIsInvalid } 
                onClick={ 
                    () => {
                        if(CheckEmail(user.email)===true) {
                            setIsInvalid(false)
                            setCodeCheck(true)
                        }else if(CheckEmail(user.email)!==true) {
                            setIsInvalid(true)
                            setCodeCheck(false)
                        }
                    }
                } 
            />
        </InputGroup>
        
        <Collapse in={ codeCheck }>
            <InputGroup className="mb-3">
                <Form.Control
                    onChange={handleCodeChange}
                    aria-label="Email-code"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" disabled={codeButtonIsInvalid}>
                    인증하기
                </Button>
            </InputGroup>
        </Collapse>

    <Card >
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text style={{ overflow:"scroll", width: '18rem', height:"19rem"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            bulk of the card's content.
            bulk of the card's content.
            bulk of the card's content.
            bulk of the card's content.
            bulk of the card's content.
            bulk of the card's content.
            bulk of the card's content.
            bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>


        

    </>
}