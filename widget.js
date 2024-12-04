async function fetchRecommendations() {
    try {
        const response = await fetch(
            'https://www.myntra.com/gateway/v2/product/31602544/cross-sell?maxCount=5',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cookie': 'at=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJbXRwWkNJNklqRWlMQ0owZVhBaU9pSktWMVFpZlEuZXlKdWFXUjRJam9pWmpjeU1HTmhNakF0WWpJeFlpMHhNV1ZtTFdGbE9EUXRPVFkxWVdJM1lqRTROVE5oSWl3aVkybGtlQ0k2SW0xNWJuUnlZUzB3TW1RM1pHVmpOUzA0WVRBd0xUUmpOelF0T1dObU55MDVaRFl5WkdKbFlUVmxOakVpTENKaGNIQk9ZVzFsSWpvaWJYbHVkSEpoSWl3aWMzUnZjbVZKWkNJNklqSXlPVGNpTENKbGVIQWlPakUzTkRnNE5UTTROalVzSW1semN5STZJa2xFUlVFaWZRLkhqS3NZTHllUERNMFplRExEckt1RFo5MmhGQzViT0Q4NnFveGlnV0NzQmc=; lt_timeout=1; lt_session=1; _d_id=fedb7e1e-6c2b-4c3e-8407-ae75cb4a9584; mynt-eupv=1; _ma_session=%7B%22id%22%3A%22713f2f1c-e506-44c2-bb3e-dfe2df588fd0-fedb7e1e-6c2b-4c3e-8407-ae75cb4a9584%22%2C%22referrer_url%22%3A%22%22%2C%22utm_medium%22%3A%22%22%2C%22utm_source%22%3A%22%22%2C%22utm_channel%22%3A%22%22%7D; _mxab_=config.bucket%3Dregular%3BConvenience_fee_logged_out_user%3Denabled%3Bcoupon.cart.channelAware%3DchannelAware_Enabled%3Bdesktop.pla%3Denabled; microsessid=761; mynt-ulc-api=pincode%3A800020; mynt-loc-src=expiry%3A1733303307068%7Csource%3AIP; x-mynt-pca=BY7pGNS4Z_OmaEyjBke74CSSrWlu2wbEmXEDYAI0p6Yspxe8ni_FPicTC9l_CvhTVudJUE7u572A8yrR1bYFuOmVDI1X02E5h1G5kWN85mHOyr5PgITV0v_PJJ-XqFRUQZnFmdXtdQkI44RkwS0xlH-RUa9TdQn0gRudMpBtN9epmOYq2g%3D%3D; _abck=BD0BCB9D88109070A4030C61A4DFAECD~0~YAAQtJUvFxYtVSiTAQAABObXkA1ecKepPfCvyuncCTYBG9DKTe9iCs2fCVKH1KcDkVBmtgd07ukFlSjKfU1kd8HKELZtuN0lS+QMc3F/G1vumpZhrp+qjaE8ZGRTsTLSQs9LpE5CiWp5cHWH9kxDrZfYC7bAhO4CN5ZctmoBXBJPWRA1X3O6z+SldRkBlBwRFym88riQ0wWoO05p75Nn6RU3yoccfAFxgPBitKLYq+z9KGEPQ/QBbKI70JK+mivI6Zt2PDjnePfrB01Jc7LvsQ8BoMWmjk+uPXgdcy6kq46xUnBLVLDERKtYQN6Yb5uXDa2cSu2yKuqmYWPYUQ7EuqfTKtSH9HbZ7mCuW6ak2bpus4VImvTvfYqz43+NXfKolml/hFbbDOMOpos8/rAbys2ovpCohVb8XJjljughj/2SRMuzc4n2xkjcZ7VS1nfA7ha39uVgBjUXxg0UHeoAd/rAKJbbnbsFqrJYzTXzbmg=~-1~-1~-1; bm_mi=5893900CDA5ED5F91FC5B3119D6DE61A~YAAQpW4/F49OGi6TAQAA367fkBqFdtzydTuP3lqoyuI108mHAojOEvTKfo/WMbrd1gFjZHFQItFuESk+idrszGoJXctaZjz5THT6l2LsZPDDzO7jdGuQ9GFr4qUgNpQ4DhSXJMMP/jSBSelowynY9Jklnsk6D9prYT5p182bx3IF9YUv7aTDPYPpvqFXl47JCNTa/+oZXF2E2EPijmK4r3WTt0s+1g96Ff3bzLddQSyWGbuLntmquzDtJZ4+avMbb9/6HzXWvCnAcEV/ejibte8bae1HtDF2NAVSQV4BzhBWaNx662jry69xVI2ZleRBE0sNW0ZLlfDALuOuvNz8m4US6uLggxbHtfzzHGaIDfXJzxt83W5j0TE5LtZVdOit+aWj7LKJwNtTrzGQshuWsG9g+H4r4ZrSbm67vzPibQ==~1; bm_sv=62AB40B46FEC8284E5DA89B6AA2E897C~YAAQpW4/F6tOGi6TAQAA4LLfkBooT0fLe5iyKNYqUq2lvCufn+HKxYK7ZIjcxm+sX1pzv0VbQATyIgITkaF7/McLzWLYkd8nT1zil3IjHjliMmM54OUHvM1d8hzDZJp08Q5zBrc5NfVb09sT+l4FJqHWCgxM+u9lGDTQzhwej7zLQCInwkQNJsoMU2yxvEnGxPSKDKwX1ICuo5vYxQ71FEt0l8qLRF03M5LZOTdmmWyWN4/W3mkDsdbG0Duj55qFyw==~1; _pv=default; dp=d; ak_bmsc=050D48456C14213027AA273048DBCE07~000000000000000000000000000000~YAAQl5UvF9lqQi+TAQAA7a3lkBp5rk3fHW/AQ3+4ejfMjNKQ2S+Aq4jUwOHoWWHh9V7WBqBD0OBqu5pS8SRh0BJzCaIIW2OHPGJ6QxToYO84MSTA7VQR1MMV7+9YePIChVzv0qbewjMkFgKrRhQW4XnkEGxq7MMgdcSIH6fT//z5LeM132NZNTESyWFqrz86lNMLdX1WWfaRmR8EJFryVOSeci6VKHB864LUcJX5RQZ38fL82Wzn8iBOizJdZK2HzUcQlyavPQOaVyqmTulLRyqWUtJWo9uQc86eo7njHOxTK2SAqOUrHzZ0fvMvSO47lgmEm+KwxCYFoLYkK1HclmemluK+nORESdNkTyi8sZ33MsMe79xbbCTrSz+5/07U2IqSFmTAvYUhFn8i+Q5emyjrvFKoi6N0SC1VT6NrZQleGO3PLYwrn8Gt2qmZ4NNSmXKV/6E0S/XVqBm/YFLTxFdufdHsKpvcCK7EUQ4vVP5R/YoWE9nt5blMzXO5dQOvokunBy5rvOTtHlf+dcOG1wlh; _xsrf=wi5J35dfHiCATg03QZVtJHmTrWRKqdiK; user_session=rFmehDYD0xzT07RW6i1Deg.9RLXp6GCXIudZhhDQnsooGoD_d-xUDY6RhS4mJdu3X6IywNIRPLYN-AF2HHLKG6wifOrllHSlpLZSdVEFeKJfTT-1CJsAaM7QUq2RQLes4z-eL6c55qxAVHpMnuw98U1sPkC0uyYvUKljgEXIk_isw.1733302792080.86400000.-OGUcSn6sO1WqYRO93pegGx1EjTHevVB9MPMlb7Djng; bm_sz=7485DB5372F3DF5DEC08282FD8624E45~YAAQl5UvFzpsQi+TAQAAqgPmkBqPVqgMP4+k+BsX1Pypr9XEKKKhLJJMzYQMLuSHALuTz3biUjOQmeB86oQD/cVf5P0a90Du75ZgcSFwRWF6XgPdP71I39TR4cJ8lXVwONxTV6a7xPOVnjzXWyAIkhpn06HXHhv3+vHeW+0XmtZ6zVOFJFBKjTY4k6XSYNUnMjQPufdDnsQTfqh7KYXCbBqjk7plNpPPFkWDm8SVmAfLZCKz16NszEZLQD7T/G9IFZXkANxbPX/FX1swPKotw2yJppWZCILMhAILZMZoclf58qOMwfBM4L9Evk8LhG9tmlNVtqI7yCD7U+hhenEDCdesoGlqoiYfX/NtuOaW+sYzOa+MKwaK+Z5fcV1kCpb8+KE2Frh0HBYE//IlIVeWOdUHNOEXsAT9B3v66Y8rS/eSbwe+InzRSQCZ9jSgJMhFwDvqXP2l4g9hBCCfdMs6ZC2lpLNbFf+hxJjkqsO25w==~3551287~4403250; utm_track_v1=%7B%22utm_source%22%3A%22direct%22%2C%22utm_medium%22%3A%22direct%22%2C%22trackstart%22%3A1733302814%2C%22trackend%22%3A1733302874%7D; utrid=b0dwCndZTE0EBHsZQm1AMCMzNTE2MzMxODE2JDI%3D.4da7734c8b2700c391b586212d073c2d',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                    'Content-Type': 'application/json',
                    'Referer': 'https://www.myntra.com/formal-shoes/killer/killer-men-round-toe-lace-ups-formal-derby-shoes/31602544/buy',
                    
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
