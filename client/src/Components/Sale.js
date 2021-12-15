import ProductList from "./SubComponents/ProductList";
import useFetch from "./useFetch";
require("dotenv").config();

const Sale = () => {
    const { data: products } = useFetch(`${process.env.REACT_APP_API_URL}/sale`);
  
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