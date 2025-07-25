import { Card } from 'react-bootstrap';

export function ProductCard({ title, image, description }) {
    return (
        <Card className="h-100 shadow-sm">
            <div style={{ height: '180px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
                <Card.Img 
                    variant="top" 
                    src={image} 
                    alt={title} 
                    style={{ 
                        maxHeight: '100%', 
                        maxWidth: '100%', 
                        objectFit: 'contain',
                        borderRadius: '4px 4px 0 0'
                    }} 
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="h6 text-success">{title}</Card.Title>
                <Card.Text className="text-muted small flex-grow-1">{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}
