import './App.css'
import { useState } from 'react'
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Formulario } from './components/Formulario';
import { AgregarProductoModal } from './components/AgregarProductoModal';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  const [products, setProducts] = useState([
    {
      title: "Manzanas Orgánicas",
      image: "https://media.istockphoto.com/id/1453112057/es/foto/deliciosa-manzana-roja-sobre-blanca.webp?a=1&b=1&s=612x612&w=0&k=20&c=ALhcSzVxELCJvjy4oYRJe4aKIXbWjIeybiYJ996A_Qk=",
      description: "Manzanas frescas y orgánicas."
    },
    {
      title: "Pan Integral",
      image: "https://th.bing.com/th/id/R.4639c7c13bd97972a603c9938293d0d5?rik=pPk8uElODihJ6Q&pid=ImgRaw&r=0",
      description: "Pan integral artesanal."
    },
    {
      title: "Pan Blanco",
      image: "https://okdiario.com/img/recetas/2017/06/14/pan-blanco-amish.jpg",
      description: "Pan Blanco artesanal."
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAgregarProducto = (nuevoProducto) => {
    setProducts([...products, nuevoProducto]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar Header */}
      <Navbar bg="success" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">🌱 EcoFood</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#productos">Productos</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-light py-5">
          <Container>
            <Row className="text-center">
              <Col>
                <Header />
                <p className="lead text-muted">
                  Productos orgánicos y saludables para tu familia
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Registration Section */}
        <section className="py-4 bg-white border-top border-bottom">
          <Container>
            <Row className="align-items-center">
              <Col md={3}>
                <h4 className="mb-md-0 text-md-start text-center">Registro de Usuario</h4>
              </Col>
              <Col md={9}>
                <Formulario />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Products Section */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="mb-4">
              <Col className="text-center">
                <h2 className="display-6 mb-3">Nuestros Productos</h2>
                <Button 
                  variant="success" 
                  size="lg"
                  onClick={() => setShowModal(true)}
                  className="mb-4"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Agregar Nuevo Producto
                </Button>
              </Col>
            </Row>
            
            <Row className="g-4">
              {products.map((elem, i) => (
                <Col key={i} sm={12} md={6} lg={4}>
                  <ProductCard 
                    title={elem.title} 
                    image={elem.image} 
                    description={elem.description} 
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <Container>
          <Row>
            <Col md={6}>
              <h5>🌱 EcoFood</h5>
              <p className="mb-0">Todo fresco y saludable</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="mb-0">&copy; 2025 EcoFood. Todos los derechos reservados.</p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Modal para agregar producto */}
      <AgregarProductoModal 
        show={showModal}
        setShow={setShowModal}
        onAgregarProducto={handleAgregarProducto}
      />
    </div>
  )
}
export default App;
