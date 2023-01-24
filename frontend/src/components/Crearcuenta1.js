import React from 'react'
import {Form, Button} from 'react-bootstrap';


const Crearcuenta1 = () => {
    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Direccion de email</Form.Label>
    <Form.Control type="email" placeholder="pepita@gmail.com" />
    <Form.Text className="text-muted">
      Recuerda no compartir esta informacion con un desconocido
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="******" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Hecho
  </Button>
</Form>
        </div>
    )
}

export default Crearcuenta1
