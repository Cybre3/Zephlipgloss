import PinkButton from "./SubComponents/Button";
import useFetch from "./useFetch";
import { useParams } from "react-router";

const ProductDetails = (props) => {
  // let product = {
  //     _id: '1',
  //     name: 'Crystal',
  //     img: 'https://img1.wsimg.com/isteam/ip/98d8e522-d343-47fd-9248-a2483aa95966/ols/IMG_E3148%5B1%5D-0001.JPG/:/rs=w:724,h:966',
  //     price: 10,
  //     sale: false,
  //     inventory: 20,
  //     color: ["Glitter", "No Glitter"],
  //     tube: ["Wand Tube", "Squeeze Tube", "Lollipop Tube"],
  //     description: {
  //       summary: 'Crystal clear gloss made with or without glitter and a delightful coconut scent. ',
  //       notifications: 'DOES NOT CONTAIN COCONUT OIL',
  //       ingredients: 'Versagel, Castor Oil, Organic Squalane Oil, Vitamin E  and coconut flavoring.'
  //     },
  //     reviews: [ '' ],
  //   }
  const { id } = useParams();
  const { data: product } = useFetch("http://localhost:5000/product/" + id);
  const { description } = product;
  console.log('this', description)
  console.log(id);

  return (
    <div className="container">
      <div className="row">
        <a href="/">All Products</a>
      </div>
      <div className="row">
        <div className="col-sm">
          <div>
            <img className="product-img" src={product.img} alt={`lipgloss-${product.title}`} />
          </div>
        </div>
        {/* Add carousel here later */}

        <div className="col-sm">
          <h3 className="product-name-details-pg">{product.name}</h3>

          <p className="product-price-details-pg">${product.price}</p>

          <p className="product-instock">{product.inventory > 0 ? "In Stock" : "Out of Stock"}</p>

          <p className="select-type-lable">
            COLOR{" "}
            <select>
              {/* <option value={product.color[0]}>{product.color[0]}</option>
              <option value={product.color[1]}>{product.color[1]}</option> */}
            </select>
          </p>

          <p className="select-type-lable">
            TUBE{" "}
            <select>
              {/* <option value={product.tube[0]}>{product.tube[0]}</option>
              <option value={product.tube[1]}>{product.tube[1]}</option>
              <option value={product.tube[2]}>{product.tube[2]}</option> */}
            </select>
          </p>

          <p className="select-type-lable">
            Quantity{" "}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>

          {description.map((item) => (
            <p>{item}</p>
          ))}

          <PinkButton action="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
