"use client"

import { FloatingLabel, Form, Button, InputGroup, Collapse, Card, Check } from "react-bootstrap";
import { useState } from "react";
import TOSCard from "./card";
import { invalid } from "moment";

export default function SignUp () {

    const [ emailButtonIsInvalid, setEmailButtonIsInvalid ] = useState(true);
    const [ emailIsInvalid, setEmailIsInvalid ]= useState(false);
    const [ codeCheckCollapse, setCodeCheckCollapse ] = useState(false);
    const [ TOSCollapse, setTOSCollapse ] = useState(false);
    const [ TOSButtonIsinvalid, setTOSButtonIsinvalid ] = useState(true);

    const [ userCode, setUserCode ] = useState(null);
    const [ severCode, setSeverCode ] = useState('1234');
    const [ codeButtonIsInvalid, setCodeButtonIsInvalid ] = useState(true);
    const [ user, setUser ] = useState({ email:"", password:"", nickname:"" });
    const [ TOSCheck, setTOSCheck] = useState( { TOS0:false, TOS1:false, TOS2:false } )
    
    

    const emailRegex = (str) => {                                                 
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(str)) {                            
            return false;         
        }else {                       
            return true;         
        }                            
    }
    const passwordRegex = (pw) =>{
        const regexPw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_.]).{8,16}$/;
        if(!regexPw.test(pw)) {
          return false;
        }
        
        return true;
      }

    const emailCheck = (e) => {
        if(emailRegex(e)===true) {
            console.log("이메일 형식 확인")
            setEmailButtonIsInvalid(false)
            setEmailIsInvalid(false)
        }else {
            console.log("이메일 형식 확인")
            setEmailButtonIsInvalid(true)
        }
    }
    const passwordCheck = (e) => {
        if(passwordRegex(e)===true) {
            console.log("비밀번호 형식 확인 true")
            
        }else {
            console.log("비��번호 형식 확인 false")
            
        }
    }


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.type]: e.target.value
        })
        if(e.target.type==="email") {
            emailCheck(e.target.value)
        }else if(e.target.type==="password") {
            passwordCheck(e.target.value)
        }else if(e.target.type==="nickname") {} 
    }
    const handleCodeChange = (e) => {
        setUserCode(e.target.value)
        if(e.target.value.length === 4) {
            setCodeButtonIsInvalid(false);
        }else {
            setCodeButtonIsInvalid(true);
        }
    }
    
    const checkTOS = (e) => {
        const id = (e.target.id);
        const newTOSCheck = TOSCheck;
        
        if(TOSCheck[id]===true) {
            newTOSCheck[id] = false;
            
        }else {
            newTOSCheck[id] = true;
        }
        console.log(newTOSCheck)
        setTOSCheck(newTOSCheck);
            
        if(Object.values(TOSCheck).every(v => v === true)) {
            setTOSButtonIsinvalid(false);
        }else {
            setTOSButtonIsinvalid(true);
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
                    isInvalid={ emailIsInvalid }
                    type="email" placeholder="name@example.com" onChange={ handleChange } 
                    onKeyDown={ 
                        (e) => {
                            if(e.key == "Enter" && emailRegex(user.email)===true) {
                                setEmailIsInvalid(false)
                                setCodeCheckCollapse(true)
                            }else if(e.key == "Enter" && emailRegex(user.email)!==true) {
                                setEmailIsInvalid(true)
                                setCodeCheckCollapse(false)
                            }
                        }
                    }
                />
                <Form.Control.Feedback type="invalid">
                    이메일 형식을 지키거라
                </Form.Control.Feedback>
            </FloatingLabel>
            <Button className="test" variant="outline-secondary" as="input" type="button" value="코드 전송" disabled={ emailButtonIsInvalid } 
                onClick={ 
                    () => {
                        if(emailRegex(user.email)===true) {
                            setEmailIsInvalid(false)
                            setCodeCheckCollapse(true)
                        }else if(emailRegex(user.email)!==true) {
                            setEmailIsInvalid(true)
                            setCodeCheckCollapse(false)
                        }
                    }
                } 
            />
        </InputGroup>
        
        <Collapse in={ codeCheckCollapse }>
            <InputGroup className="mb-3">
                <Form.Control
                    onChange={handleCodeChange}
                    aria-label="Email-code"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" disabled={codeButtonIsInvalid}
                    onClick={(e)=>{
                        if(userCode === severCode) {
                        setTOSCollapse(true)}
                        else{
                            console.log("오류메세지")
                        }
                    }}>
                    인증하기
                </Button>
            </InputGroup>
        </Collapse>
        
        <Collapse in={ TOSCollapse }>
            <Card style={{ width: '20rem'}}>
                <Card.Body>
                    <Card.Title>이용약관 동의</Card.Title>
                    
                    <TOSCard id={"TOS0"} Subtitle ={"이용약관 1"} 
                        text={"다양한 네이버 서비스를 즐겨보세요. 네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다. 여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다."} 
                        TOSCheck={TOSCheck.TOS0} 
                        onTOSCheckChange={checkTOS} />
                    <br/>
                    <br/>
                    <TOSCard id={"TOS1"} Subtitle ={"이용약관 2"} 
                        text={"다양한 네이버 서비스를 즐겨보세요. 네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다. 여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다."}
                        TOSCheck={TOSCheck.TOS1} 
                        onTOSCheckChange={checkTOS} />
                    <br/>
                    <br/>
                    <TOSCard id={"TOS2"} Subtitle ={"이용약관 3"} 
                        text={"다양한 네이버 서비스를 즐겨보세요. 네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다. 여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다."}
                        TOSCheck={TOSCheck.TOS2} 
                        onTOSCheckChange={checkTOS} />

                    <br/>
                    
                    <Button disabled={TOSButtonIsinvalid} onClick={(e)=>{}}>
                        회원가입
                    </Button>
                </Card.Body>
            </Card>
        </Collapse>

        <Collapse in={ TOSCollapse }>
            <Form>
            <Form.Control
        type="text"
        placeholder={user.email}
        aria-label="Disabled input example"
        disabled
        readOnly
        />
        <Form.Control type="password" placeholder="비밀번호" />
        <Form.Control type="password" placeholder="비밀번호 확인" onChange={handleChange}/>
      </Form>
        </Collapse>
        
      
        

    </>
}