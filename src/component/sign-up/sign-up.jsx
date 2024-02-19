"use client"

import { FloatingLabel, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

export default function SignUp () {


    const [ emailCode, setEmailCode ] = useState(true)
    const [ isInvalid, setIsInvalid ]= useState(false)
    const [ user, setUser ] = useState({ email:"", password:"", nickname:"" })
    
 
    const CheckEmail = (str) => {                                                 
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(str)) {                            
            return false;         
        }else {                       
            return true;         
        }                            
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.type]: e.target.value
        })
        if(CheckEmail(e.target.value)===true) {
            console.log("이메일 형식 확인")
            setEmailCode(false)
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
        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
            <Form.Control
            
                isInvalid={ isInvalid }
                type="email" placeholder="name@example.com" onChange={ handleChange } />
            <Form.Control.Feedback type="invalid">
                이메일 형식을 지키거라
            </Form.Control.Feedback>
        </FloatingLabel>
        <Button as="input" type="button" value="코드 전송" disabled={ emailCode } onClick={ () => { setContent(group) } }/>

        
    
    </>
}