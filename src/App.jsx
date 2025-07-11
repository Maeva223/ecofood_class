import './App.css'
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

function App() {
  const products = [
    {
      title: "Manzanas Orgánicas",
      image: "https://via.placeholder.com/150?text=Manzana",
      description: "Manzanas frescas y orgánicas."
    },
    {
      title: "Pan Integral",
      image: "https://via.placeholder.com/150?text=Pan",
      description: "Pan integral artesanal."
    },
    {
      title: "Pan Blanco",
      image: "https://via.placeholder.com/150?text=Pan",
      description: "Pan integral artesanal."
    }
  ];
  return (
    <div>
      <Header />

      {products.map((elem, i) => {
         return <ProductCard  title={elem.title} image={elem.image} description={elem.description}></ProductCard>
      })}


      <Header />
    </div>
  )
}
export default App;
