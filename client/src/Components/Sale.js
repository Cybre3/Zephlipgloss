import ProductList from "./SubComponents/ProductList";
import useFetch from "./useFetch";


const Sale = () => {
    const { data: products } = useFetch("http://localhost:5000/sale");
  
    return (
      <div>
        <h3>Sale Items</h3>
        <div className="products-grid-container">
            <ProductList products={products} />
        </div>
      </div>
    );
}
 
export default Sale;