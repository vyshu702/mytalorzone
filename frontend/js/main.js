document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                data.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.innerHTML = `
                        <h2>${product.name}</h2>
                        <p>${product.price} USD</p>
                    `;
                    productsContainer.appendChild(productCard);
                });
            })
            .catch(error => console.error('Error fetching products:', error));
    }
});
