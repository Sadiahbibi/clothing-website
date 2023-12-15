function showPopup() {
    alert("You clicked on LunaLace. Redirecting to Home!");
}

function loadMoreItems() {
    // This is a simple example; you would typically fetch more items from a server
    const menProductsContainer = document.getElementById('men-products');

    // Add more product items dynamically
    for (let i = 11; i <= 20; i++) {
        const product = document.createElement('div');
        product.className = 'product';
        product.innerHTML = `
            <h3>Item ${i}</h3>
            <p>Price: $${(i * 5).toFixed(2)}</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        `;
        menProductsContainer.appendChild(product);
    }
}