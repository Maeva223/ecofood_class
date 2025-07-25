import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export function PublicLayout() {
  return (
    <div className="min-vh-100 bg-light d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="text-center mb-4">
              <h1 className="display-4 text-success">🌱 EcoFood</h1>
              <p className="text-muted">Productos orgánicos y saludables</p>
            </div>
            
            <div className="card shadow">
              <div className="card-body p-4">
                <Outlet />
              </div>
            </div>
            
            <div className="text-center mt-3">
              <small className="text-muted">© 2025 EcoFood. Todos los derechos reservados.</small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
