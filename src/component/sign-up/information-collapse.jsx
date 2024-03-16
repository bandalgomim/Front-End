
import { Collapse, Form, Button } from "react-bootstrap"

export default function Information({collapse, email, nicknameAndPasswordChange, passwordVerifyChange, onButtonClick}) {

    return(
        <Collapse in={ collapse }>
            <Form>
            <Form.Control
        type="text"
        placeholder={email}
        aria-label="Disabled input example"
        disabled
        readOnly
        />
        <Form.Control type="text" data-information-type="nickname" placeholder="닉네임" onChange={nicknameAndPasswordChange}/>
        <Form.Control type="password" data-information-type="password" placeholder="비밀번호" onChange={nicknameAndPasswordChange}/>
        
        <Form.Control type="password" placeholder="비밀번호 확인" onChange={passwordVerifyChange}/>
        
        <Button onClick={onButtonClick}>
                        가입하기
                    </Button>
      </Form>
      
        </Collapse>
        
    )
}