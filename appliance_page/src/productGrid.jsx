// ProductGrid.jsx
import React from 'react';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={`Product ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
