import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';

export function Ventas() {
  const ventas = [
    {
      id: '#001',
      fecha: '2025-01-20',
      cliente: 'María González',
      productos: 'Manzanas Orgánicas, Pan Integral',
      total: '$35.400',
      estado: 'Completada'
    },
    {
      id: '#002',
      fecha: '2025-01-19',
      cliente: 'Juan Pérez',
      productos: 'Pan Blanco, Zanahorias',
      total: '$25.580',
      estado: 'Pendiente'
    },
    {
      id: '#003',
      fecha: '2025-01-18',
      cliente: 'Ana Rodríguez',
      productos: 'Lechuga, Tomates Cherry',
      total: '$22.630',
      estado: 'Completada'
    },
    {
      id: '#004',
      fecha: '2025-01-17',
      cliente: 'Carlos López',
      productos: 'Manzanas Orgánicas',
      total: '$11.800',
      estado: 'Enviada'
    },
    {
      id: '#005',
      fecha: '2025-01-16',
      cliente: 'Laura Martín',
      productos: 'Pan Integral, Lechuga, Zanahorias',
      total: '$41.070',
      estado: 'Completada'
    }
  ];

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case 'Completada':
        return <Badge bg="success">{estado}</Badge>;
      case 'Pendiente':
        return <Badge bg="warning">{estado}</Badge>;
      case 'Enviada':
        return <Badge bg="info">{estado}</Badge>;
      default:
        return <Badge bg="secondary">{estado}</Badge>;
    }
  };

  const totalVentas = ventas.reduce((acc, venta) => acc + parseFloat(venta.total.replace('$', '').replace('.', '')), 0);

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <h2>Gestión de Ventas</h2>
          <p className="text-muted mb-0">Historial y estadísticas de ventas</p>
        </Col>
      </Row>

      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center bg-primary text-white">
            <Card.Body>
              <h3>{ventas.length}</h3>
              <p className="mb-0">Total Ventas</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-success text-white">
            <Card.Body>
              <h3>${totalVentas.toLocaleString('es-CL')}</h3>
              <p className="mb-0">Ingresos Totales (CLP)</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-warning text-white">
            <Card.Body>
              <h3>{ventas.filter(v => v.estado === 'Pendiente').length}</h3>
              <p className="mb-0">Pendientes</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-info text-white">
            <Card.Body>
              <h3>${(totalVentas / ventas.length).toLocaleString('es-CL')}</h3>
              <p className="mb-0">Promedio por Venta (CLP)</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sales Table */}
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Historial de Ventas</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>ID Venta</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Productos</th>
                    <th>Total</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {ventas.map((venta, index) => (
                    <tr key={index}>
                      <td><strong>{venta.id}</strong></td>
                      <td>{venta.fecha}</td>
                      <td>{venta.cliente}</td>
                      <td>{venta.productos}</td>
                      <td><strong>{venta.total}</strong></td>
                      <td>{getEstadoBadge(venta.estado)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
