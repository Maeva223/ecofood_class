import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export function Perfil() {
  const userEmail = localStorage.getItem('userEmail');

  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="mb-4">Mi Perfil</h2>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Información Personal</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" defaultValue="Administrador EcoFood" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" defaultValue={userEmail} disabled />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control type="tel" defaultValue="+56 9 5867 8900" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ciudad</Form.Label>
                      <Form.Control type="text" defaultValue="Chile" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" defaultValue="Av. de aguirre 5555" />
                </Form.Group>

                <Button variant="success">Guardar Cambios</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Estadísticas</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <small className="text-muted">Productos creados</small>
                <h4 className="text-success">3</h4>
              </div>
              <div className="mb-3">
                <small className="text-muted">Último acceso</small>
                <p className="mb-0">Hoy, 14:30</p>
              </div>
              <div className="mb-3">
                <small className="text-muted">Cuenta creada</small>
                <p className="mb-0">Enero 2025</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
