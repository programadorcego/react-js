import React from "react";
import styles from "./app.module.css";

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
        <div className={styles.container}>
<h1>Listas</h1>

<ul>
    {items}
</ul>
        </div>
    );
}

export default App;