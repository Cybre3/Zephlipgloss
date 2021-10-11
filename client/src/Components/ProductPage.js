import { useParams } from "react-router";
import ProductDetails from "./Product-Details";
import useFetch from "./useFetch";

const ProductPage = () => { 
    const { id } = useParams();
    const { data: product } = useFetch("http://localhost:5000/product/" + id);

    return (  
        <ProductDetails products={product} />
    );
}
 
export default ProductPage;