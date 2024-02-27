"use client"
import { useState,useEffect } from "react"
import { Card, Form } from "react-bootstrap"

export default function TOSCard ( {Subtitle, text, id, TOSCheck, onTOSCheckChange} ) {
    const [TOSCheckCard, setTOSCheckCard] = useState(TOSCheck)

    return <>
    <Card.Subtitle className="mb-2 text-muted">{Subtitle}</Card.Subtitle>
                
        <Card.Text style={{ overflow:"scroll", width: '18rem', height:"5rem"}}>
            {text}

        </Card.Text>
        <Form.Check // prettier-ignore
            type="checkbox"
            id = {id}
            label="동의합니다."
            onChange={onTOSCheckChange}
        />
    
    
    
    </>
} 