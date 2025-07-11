export function ProductCard({ title, image, description }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={image} alt={title} width={150} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
