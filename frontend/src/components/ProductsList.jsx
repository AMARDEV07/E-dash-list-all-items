import { useState, useEffect } from 'react';

function ProductsList() {
  const [products, setProducts] = useState([]);//empty array

  useEffect(() => {
    getProducts();//handel api
  }, []);

  // gat api call for product liasting
  const getProducts = async () => {
    try {
      const result = await fetch("http://localhost:3000/products");
      const data = await result.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };


  return (
    <div  className='product-div'>

    <div className='product-list-header'>
    <h1>Product List</h1>
    </div>

    <div className='product-list-header'>

    <ul className='product-list-ul' >
      
        <li><strong>Serial No</strong></li>
        <li><strong>Name</strong></li>
        <li><strong>Category</strong></li>
        <li><strong>Price</strong></li>
      </ul>

    </div>

      <div className='product-list' >
        {products.map((product, index) => (
          <ul key={index}>
            <li>{index + 1}</li>
            <li>{product.name}</li>
            <li>{product.category}</li>
            <li>₹{product.price}</li>
          </ul>
        ))}

      </div>
      
    </div>
  );
}

export default ProductsList;
