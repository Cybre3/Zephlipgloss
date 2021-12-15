import { useParams } from "react-router";
import ProductDetails from "./Product-Details";
import useFetch from "./useFetch";
require("dotenv").config();

const ProductPage = () => { 
    const { id } = useParams();
    const { data: product } = useFetch(`${process.env.REACT_APP_API_URL}/product/` + id);

    return (  
        <ProductDetails products={product} />
    );
}
 
export default ProductPage;