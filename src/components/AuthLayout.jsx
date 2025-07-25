import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

export function AuthLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Navbar bg="success" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>🌱 EcoFood - Dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <Button variant="outline-light" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="bg-light border-end" style={{ width: '250px', minHeight: '100vh' }}>
          <div className="p-3">
            <h5 className="mb-3">Navegación</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/dashboard" className="text-dark py-2">
                <i className="bi bi-house-door me-2"></i>
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/productos" className="text-dark py-2">
                <i className="bi bi-box-seam me-2"></i>
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/perfil" className="text-dark py-2">
                <i className="bi bi-person me-2"></i>
                Perfil
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/ventas" className="text-dark py-2">
                <i className="bi bi-graph-up me-2"></i>
                Ventas
              </Nav.Link>
            </Nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-auto">
        <Container>
          <Row>
            <Col>
              <p className="mb-0 text-center">© 2025 EcoFood Dashboard. Todos los derechos reservados.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
