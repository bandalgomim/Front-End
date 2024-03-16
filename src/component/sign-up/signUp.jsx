"use client"

import { FloatingLabel, Form, Button, InputGroup, Collapse, Card } from "react-bootstrap";
import { useState } from "react";
import SignUpForm from "./signUp-form"
import TOSCardList from "./signUp-cardList";
import SignUpFormFeedback from "./signUp-formFeedback"

export default function SignUp () {

    const [ emailCollapse, setEmailCollapse ] = useState(true);
    const [ codeCheckCollapse, setCodeCheckCollapse ] = useState(false);
    const [ TOSCollapse, setTOSCollapse ] = useState(false);
    const [ informationCollapse, setInformationCollapse ] = useState(false);

    const [ emailIsInvalid, setEmailIsInvalid ]= useState(false);
    const [ codeIsInvalid, setCodeIsInvalid ]= useState(false);
    const [ nicknameIsInvalid, setNicknameIsInvalid ]= useState(false)
    const [ passwordIsInvalid, setPasswordIsInvalid ]= useState(false)

    const [ emailButtonIsInvalid, setEmailButtonIsInvalid ] = useState(true);
    const [ codeButtonIsInvalid, setCodeButtonIsInvalid ] = useState(true);
    const [ TOSButtonIsinvalid, setTOSButtonIsinvalid ] = useState(true);
    const [ nicknameButtonIsInvalid, setNicknameButtonIsInvalid ] = useState(false);
    const [ signUpButtonIsInvalid, setSignUpButtonIsInvalid ] = useState(false);
    
    const [ user, setUser ] = useState({ email:"", password:"", nickname:"" });
    const [ userCode, setUserCode ] = useState(null);
    const [ severCode, setSeverCode ] = useState('1234');
    const [ IsTOSCheck, setIsTOSCheck] = useState( { TOS0:false, TOS1:false, TOS2:false } )
    const [ emailMassege, setEmailMassege] = useState(null);
    const [ isNicknameUseable, setIsNicknameUseable ] = useState(false);
    const [ nicknameMassege, setNicknameMassege] = useState(null);
    const [ verifyPassword, setVerifyPassword] = useState(null)
    const [ passwordMassege, setPasswordMassege] = useState(null);
    

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
        //use api
        let result = true;
        
        //test
        if(e === "test@naver.com") result = false;

        if(!emailRegex(e)) {
            setEmailMassege("이메일 형식이 아닙니다.")
            return false;
            
        }else if(emailRegex(e) && !result){
            setEmailMassege("사용중인 이메일입니다.")
            return false;
        }else{
            return true;
        }
    }
    
    const TOSCheck = (e) => {
        const id = (e.target.id);
        const newIsTOSCheck = IsTOSCheck;
        
        if(IsTOSCheck[id]===true) {
            newIsTOSCheck[id] = false;
            
        }else {
            newIsTOSCheck[id] = true;
        }
        
        setIsTOSCheck(newIsTOSCheck);
            
        if(Object.values(IsTOSCheck).every(v => v === true)) {
            setTOSButtonIsinvalid(false);
        }else {
            setTOSButtonIsinvalid(true);
        }
    }


    const nicknameCheck = (e) => {
        //use api
        
        let result = true;
        if (e==="") result = false;
        //test
        if(e === "test") result = false;
        return result;
    }

    const passwordCheck = (e) => {
        if(passwordRegex(e)===true) {
            return true;            
        }else {
            return false; 
        }
    }

    const handleUserChange = (e) => {
        setUser({
            ...user,
            [e.target.dataset.informationType]: e.target.value
        })
        if(e.target.dataset.informationType==="email") {
            if(emailRegex(e.target.value)) {
                setEmailButtonIsInvalid(false)
            }else{
                setEmailButtonIsInvalid(true)
            }
            
        }else if(e.target.dataset.informationType==="nickname") {
            setIsNicknameUseable(false)
            if(e.target.value.length !== 0) {
                setNicknameButtonIsInvalid(false)
            }else{
                setNicknameButtonIsInvalid(true)
            }
        } 
    }
    const handleCodeChange = (e) => {
        setUserCode(e.target.value)
        if(e.target.value.length === 4) {
            setCodeButtonIsInvalid(false);
        }else {
            setCodeButtonIsInvalid(true);
        }
    }
    const handleVerifyPasswordChange = (e) => {
        setVerifyPassword(e.target.value)
    }

    const emailHandler = (e) => {
        if(e.type === "keydown") {
            if(e.key == "Enter" && emailCheck(user.email)) {
                setEmailCollapse(false)
                setCodeCheckCollapse(true)
            }else if(e.key == "Enter" && !emailCheck(user.email)) {
                setEmailIsInvalid(true)
                setCodeCheckCollapse(false)
            }
        }else{
            if(emailCheck(user.email)) {
                setEmailCollapse(false)
                setCodeCheckCollapse(true)
            }else if(!emailCheck(user.email)) {
                setEmailIsInvalid(true)
                setCodeCheckCollapse(false)
            }
        }
    }
    const codeHandler = (e)=>{
        if(e.type === "keydown") {
            if(e.key == "Enter" && userCode === severCode) {
                setCodeCheckCollapse(false)
                setTOSCollapse(true)
            }else if (e.key == "Enter" && userCode !== severCode){
                setCodeIsInvalid(true)
            }
        }else{
            if(userCode === severCode) {
                setCodeCheckCollapse(false)
                setTOSCollapse(true)
            }else{
                setCodeIsInvalid(true)
            }
        }
    }
    const TOSHandler = (e)=>{
            setTOSCollapse(false)
            setInformationCollapse(true)
        }
    
    const nicknameHanler = (e)=>{
        if(e.type === "keydown") {
            if(e.key == "Enter" && nicknameCheck(user.nickname)) {
                setNicknameIsInvalid(false)
                alert("사용 가능한 닉네임")
                setIsNicknameUseable(true)
            }else if (e.key == "Enter" && !nicknameCheck(user.nickname)){
                setNicknameMassege("중복된 닉네임입니다")
                setNicknameIsInvalid(true)
            }
        }else{
            if(nicknameCheck(user.nickname)) {
                setNicknameIsInvalid(false)
                alert("사용 가능한 닉네임")
                setIsNicknameUseable(true)
            }else{
                setNicknameMassege("중복된 닉네임입니다")
                setNicknameIsInvalid(true)
            }
        }
    }

    const signUpHandler = (e) => {
        if(e.type === "keydown") {
            if(e.key == "Enter" && verifyPassword !== user.password) {
                setPasswordMassege("비밀번호가 일치하지 않습니다.")
                setPasswordIsInvalid(true)
            }else if(e.key == "Enter" && passwordCheck(user.password) !== true) {
                setPasswordMassege("형식이 틀립니다.")
                setPasswordIsInvalid(true)
            }else if(e.key == "Enter" && !isNicknameUseable) {
                setNicknameMassege("별명 중복여부를 확인해주세요.")
                setNicknameIsInvalid(true)
            }
            else if(e.key == "Enter") {
                console.log(user)
            }
        }else{
            if(verifyPassword !== user.password) {
                setPasswordMassege("비밀번호가 일치하지 않습니다.")
                setPasswordIsInvalid(true)
            }else if(passwordCheck(user.password) !== true) {
                setPasswordMassege("형식이 틀립니다.")
                setPasswordIsInvalid(true)
            }else if(!isNicknameUseable) {
                setNicknameMassege("별명 중복여부를 확인해주세요.")
                setNicknameIsInvalid(true)
            }
            else if(isNicknameUseable) {
                console.log(user)
            }
        }
    }

    return <>
        
       <Collapse in={ emailCollapse } style={{height:'24px', width:'500px'}}>
            <InputGroup className="mb-3" >
                <FloatingLabel controlId="emilSection" label="Email address" className="mb-3">
                    <SignUpForm isInvalid={ emailIsInvalid } type={"email"} dataType={"email"} placeholder={"name@example.com"} onChangeHandler={handleUserChange} onkeyDownHandler={emailHandler} maxLength={100}/>
                    <SignUpFormFeedback value={emailMassege}/>
                </FloatingLabel>
                <Button className="test" as="input" type="button" value="코드 전송" disabled={ emailButtonIsInvalid } onClick={ emailHandler } />
            </InputGroup>
        </Collapse>
        
        <Collapse in={ codeCheckCollapse } style={{width:'500px'}}>
            <InputGroup className="mb-3" size="sm">
                <SignUpForm isInvalid={ codeIsInvalid } type={"text"} dataType={"text"} placeholder={"코드를 입력하세요"} onChangeHandler={handleCodeChange} onkeyDownHandler={codeHandler} maxLength={4}/>
                <Button className="test" as="input" type="button" value="인증하기" disabled={codeButtonIsInvalid} onClick={codeHandler}/>
                <SignUpFormFeedback value={"코드가 일치하지 않습니다"}/>
            </InputGroup>
        </Collapse>
        
        <Collapse in={ TOSCollapse }>
            <Card style={{ width: '20rem'}} >
                <Card.Body>
                    <Card.Title>이용약관 동의</Card.Title>
                    <TOSCardList IsTOSCheck={IsTOSCheck} TOSCheck={TOSCheck} TOSButtonIsinvalid={TOSButtonIsinvalid} TOSHandle={TOSHandler}/>
                    <Button className="test" as="input" type="button" value="회원가입" disabled={TOSButtonIsinvalid} onClick={TOSHandler}/>
                </Card.Body>
            </Card>
        </Collapse>
        
        <Collapse in={ informationCollapse } style={{width:'500px'}}>
            <Form>
                <Form.Group>
                    <InputGroup className="mb-3">
                        <SignUpForm isInvalid={ nicknameIsInvalid } type={"text"} dataType={"nickname"} placeholder={"닉네임"} onChangeHandler={handleUserChange} onkeyDownHandler={nicknameHanler} maxLength={100}/>
                        <Button className="test" as="input" type="button" value="중복확인" disabled={ nicknameButtonIsInvalid } onClick={ nicknameHanler } />
                        <SignUpFormFeedback value={nicknameMassege}/>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup className="mb-3">
                        <SignUpForm isInvalid={ passwordIsInvalid } type={"password"} dataType={"password"} placeholder={"비밀번호"} onChangeHandler={handleUserChange} onkeyDownHandler={signUpHandler} maxLength={16}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <SignUpForm isInvalid={ passwordIsInvalid } type={"password"} dataType={"password"} placeholder={"비밀번호 확인"} onChangeHandler={handleVerifyPasswordChange} onkeyDownHandler={signUpHandler} maxLength={16}/>
                        <SignUpFormFeedback value={passwordMassege}/>
                    </InputGroup>
                    <Button className="test" as="input" type="button" value="가입하기" disabled={ signUpButtonIsInvalid } onClick={ signUpHandler } />
                </Form.Group>
            </Form>
        </Collapse>
    </>
}