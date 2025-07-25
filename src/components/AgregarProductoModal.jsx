import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export function AgregarProductoModal({ show, setShow, onAgregarProducto }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => {
    setShow(false);
    // Limpiar los campos al cerrar
    setTitle('');
    setImage('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que los campos no estén vacíos
    if (!title.trim() || !image.trim() || !description.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Crear el nuevo producto
    const nuevoProducto = {
      title: title.trim(),
      image: image.trim(),
      description: description.trim()
    };

    // Agregar el producto al array
    onAgregarProducto(nuevoProducto);
    
    // Cerrar el modal y limpiar campos
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nuevo Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título del Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el título del producto"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL de la Imagen</Form.Label>
            <Form.Control
              type="url"
              placeholder="Ingresa la URL de la imagen"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingresa la descripción del producto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
