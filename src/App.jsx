import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
    const user = {
        name: "Willian",
        lastname: "Pereira",
        age: 34,
    };
    return (
        <>
        <Header />
        <div>
            <p>Olá, meu nome é {user.name} {user.lastname} e tenho {user.age} anos.</p>
        </div>
        <Footer />
        </>
    );
}

export default App;