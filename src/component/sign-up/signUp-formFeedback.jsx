import { Form } from "react-bootstrap"
export default function SignUpFormFeedback( {value} ) {
    return <Form.Control.Feedback type="invalid">
        {value}
    </Form.Control.Feedback>
}
