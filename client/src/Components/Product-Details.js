import PinkButton from './Button';

const ProductDetails = () => {
    let sampleProduct = {
        _id: '1',
        name: 'Crystal',
        img: 'https://img1.wsimg.com/isteam/ip/98d8e522-d343-47fd-9248-a2483aa95966/ols/IMG_E3148%5B1%5D-0001.JPG/:/rs=w:724,h:966',
        price: 10,
        sale: false,
        inventory: 20,
        color: ["Glitter", "No Glitter"],
        tube: ["Wand Tube", "Squeeze Tube", "Lollipop Tube"],
        description: {
          summary: 'Crystal clear gloss made with or without glitter and a delightful coconut scent. ',
          notifications: 'DOES NOT CONTAIN COCONUT OIL',
          ingredients: 'Versagel, Castor Oil, Organic Squalane Oil, Vitamin E  and coconut flavoring.'
        },
        reviews: [ '' ],
      }

    return (
        <div className="container">
            <div className="row">
                <a href="/">All Products</a>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div>
                        <img className="product-img" src={sampleProduct.img} alt={`lipgloss-${sampleProduct.title}`}/>
                    </div>
                </div>
                {/* Add carousel here later */}
                
                <div className="col-sm">
                    <h3 className="product-name-details-pg">{sampleProduct.name}</h3>

                    <p className="product-price-details-pg">${sampleProduct.price.toFixed(2)}</p>

                    <p className="product-instock">{sampleProduct.inventory > 0 ? "In Stock" : "Out of Stock"}</p>

                    <p className="select-type-lable">
                        COLOR{' '}
                        <select>
                            <option value={sampleProduct.color[0]}>{sampleProduct.color[0]}</option>
                            <option value={sampleProduct.color[1]}>{sampleProduct.color[1]}</option>
                        </select>
                    </p>

                    <p className="select-type-lable">
                        TUBE{' '}
                        <select>
                            <option value={sampleProduct.tube[0]}>{sampleProduct.tube[0]}</option>
                            <option value={sampleProduct.tube[1]}>{sampleProduct.tube[1]}</option>
                            <option value={sampleProduct.tube[2]}>{sampleProduct.tube[2]}</option>
                        </select>
                    </p>

                    <p className="select-type-lable">
                        Quantity{' '}
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>

                    <p className="description-text">{sampleProduct.description.summary}</p>

                    <p className="description-text">{sampleProduct.description.notifications}</p>

                    <p className="description-text">{sampleProduct.description.ingredients}</p>

                    <PinkButton action="Add to Cart"/>
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetails;