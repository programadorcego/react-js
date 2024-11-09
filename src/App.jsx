import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
    let logado = false;
    /*let content;

    if(logado) {
        content = <Header />
    } else {
        content = <Footer />
    }*/
    
    //let content = logado ? <Header /> : <Footer />
        return (
        <>
{logado && (<Header />)}
        </>
    );
}

export default App;