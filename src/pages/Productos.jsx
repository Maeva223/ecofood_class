import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard';
import { AgregarProductoModal } from '../components/AgregarProductoModal';

export function Productos() {
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
    },
    {
      title: "Zanahorias Orgánicas",
      image: "https://elsiglo.com.gt/wp-content/uploads/2020/04/zanahoria.jpg",
      description: "Zanahorias frescas del huerto."
    },
    {
      title: "Lechuga Hidropónica",
      image: "https://tse3.mm.bing.net/th/id/OIP.RObR5gvnvfmK8E1qa7pmFQHaE8?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Lechuga cultivada sin químicos."
    },
    {
      title: "Tomates Cherry",
      image: "https://tse1.mm.bing.net/th/id/OIP.8Upp68Rt_7eZIk6U5umGeAHaEK?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Tomates cherry dulces y jugosos."
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAgregarProducto = (nuevoProducto) => {
    setProducts([...products, nuevoProducto]);
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <div>
            <h2>Gestión de Productos</h2>
            <p className="text-muted mb-0">Administra tu catálogo de productos orgánicos</p>
          </div>
          <Button 
            variant="success" 
            size="lg"
            onClick={() => setShowModal(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Agregar Producto
          </Button>
        </Col>
      </Row>

      {/* Stats */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center bg-success text-white">
            <Card.Body>
              <h3>{products.length}</h3>
              <p className="mb-0">Total Productos</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center bg-primary text-white">
            <Card.Body>
              <h3>{products.filter(p => p.title.includes('Orgánic')).length}</h3>
              <p className="mb-0">Productos Orgánicos</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center bg-warning text-white">
            <Card.Body>
              <h3>4.8⭐</h3>
              <p className="mb-0">Calificación Promedio</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Products Grid */}
      <Row className="g-4">
        {products.map((elem, i) => (
          <Col key={i} sm={12} md={6} lg={4} xl={3}>
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
