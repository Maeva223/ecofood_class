import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard';
import { AgregarProductoModal } from '../components/AgregarProductoModal';

export function Dashboard() {
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

  const userEmail = localStorage.getItem('userEmail');

  return (
    <Container fluid>
      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <h2 className="mb-3">¡Bienvenido al Dashboard! 🌱</h2>
          <p className="text-muted">Usuario: {userEmail}</p>
        </Col>
      </Row>

      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-success">{products.length}</h3>
              <p className="mb-0">Productos Totales</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-primary">156</h3>
              <p className="mb-0">Ventas del Mes</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-warning">23</h3>
              <p className="mb-0">Clientes Activos</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-info">$9.800.500</h3>
              <p className="mb-0">Ingresos (CLP)</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Products Section */}
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <h3>Productos Destacados</h3>
          <Button 
            variant="success" 
            onClick={() => setShowModal(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Agregar Producto
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

      {/* Modal para agregar producto */}
      <AgregarProductoModal 
        show={showModal}
        setShow={setShowModal}
        onAgregarProducto={handleAgregarProducto}
      />
    </Container>
  );
}
