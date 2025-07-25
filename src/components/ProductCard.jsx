import { Card } from 'react-bootstrap';

export function ProductCard({ title, image, description }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}
