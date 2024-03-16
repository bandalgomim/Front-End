import { Form, FloatingLabel } from "react-bootstrap"

export default function SignUpForm( {isInvalid, placeholder, type, dataType, onChangeHandler, onkeyDownHandler, maxLength} ) {
    return (
    <Form.Control
        
        isInvalid={ isInvalid }
        placeholder={placeholder} 
        type={type}
        data-information-type={dataType}
        onChange={ onChangeHandler } 
        onKeyDown={ onkeyDownHandler }
        maxLength={ maxLength }
    />
)
}