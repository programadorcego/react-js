import React from "react";

const App = () => {
    const products = [
        {
            id: 1,
            name: "Produto 1"
        },
        {
            id: 2,
            name: "Produto 2"
        }, {
            id: 3,
            name: "Produto 3"
        }
    ];

    const items = products.map(product => {
        return (
            <li key={product.id}>{product.name}</li>
        );
    });

    return (
        <>
<h1>Listas</h1>

<ul>
    {items}
</ul>
        </>
    );
}

export default App;