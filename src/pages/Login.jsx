import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de autenticación simple
    if (formData.email === 'admin@ecofood.com' && formData.password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', formData.email);
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas. Usa: admin@ecofood.com / 123456');
    }
  };

  return (
    <>
      <h3 className="text-center mb-4">Iniciar Sesión</h3>
      
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="admin@ecofood.com"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="123456"
            required
          />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100 mb-3">
          Iniciar Sesión
        </Button>
      </Form>

      <div className="text-center">
        <p className="mb-0">¿No tienes cuenta?</p>
        <Link to="/registro" className="text-success">
          Regístrate aquí
        </Link>
      </div>

      <div className="mt-3 p-3 bg-light rounded">
        <small className="text-muted">
          <strong>Datos de prueba:</strong><br />
          Email: admin@ecofood.com<br />
          Contraseña: 123456
        </small>
      </div>
    </>
  );
}
