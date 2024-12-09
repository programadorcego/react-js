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

    const estilo = {margin: 0, padding: 0, backgroundColor: '#000', color: '#fff', width: '100%', height: '100%'};

    return (
        <div style={estilo}>
<h1>Listas</h1>

<ul>
    {items}
</ul>
        </div>
    );
}

export default App;