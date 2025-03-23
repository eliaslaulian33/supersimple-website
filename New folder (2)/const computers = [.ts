const computers = [
    {
        name: "Gaming PC",
        price: 1200,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Office PC",
        price: 800,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Laptop",
        price: 1000,
        image: "https://via.placeholder.com/150",
    },
];

function displayComputers() {
    const computerContainer = document.getElementById("computers");
    computers.forEach(computer => {
        const computerDiv = document.createElement("div");
        computerDiv.classList.add("product");
        computerDiv.innerHTML = `
            <img src="${computer.image}" alt="${computer.name}">
            <h3>${computer.name}</h3>
            <p>Price: $${computer.price}</p>
            <button onclick="addToCart('${computer.name}')">Add to Cart</button>
        `;
        computerContainer.appendChild(computerDiv);
    });
}

function addToCart(computerName) {
    alert(`${computerName} has been added to your cart!`);
}

window.onload = displayComputers;