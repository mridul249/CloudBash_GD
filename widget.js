async function fetchRecommendations() {
    try {
        const response = await fetch(
            'https://www.myntra.com/gateway/v2/product/31602544/cross-sell?maxCount=5',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        renderWidget(data.products);
    } catch (error) {
        console.error('Failed to fetch recommendations:', error);
        document.getElementById('widget-container').innerText = 'Failed to load recommendations.';
    }
}

function renderWidget(products) {
    const container = document.getElementById('widget-container');
    if (!products || products.length === 0) {
        container.innerText = 'No recommendations found.';
        return;
    }

    container.innerHTML = products
        .map(
            (product) => `
        <div class="widget-item">
            <img src="${product.image}" alt="${product.name}" />
            <p>${product.name}</p>
        </div>
    `
        )
        .join('');
}
fetchRecommendations();
