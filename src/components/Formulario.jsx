import { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';

export function Formulario() {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${nombre}`);
    setNombre(''); // Limpiar el campo después del envío
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-end">
        <Col md={8}>
          <Form.Group>
            <Form.Label className="visually-hidden">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Button 
            type="submit" 
            variant="success" 
            className="w-100"
            disabled={!nombre.trim()}
          >
            Registrarse
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
