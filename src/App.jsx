import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./services/api";

import Form from "./components/devForm/Form";
import Dev from "./components/devs/Dev";


function App() {
     const [devs, setDevs] = useState([]);

     useEffect(() => {
          async function loadDevs() {
               const response = await api.get("/devs");
               setDevs(response.data);
          }
          loadDevs();
     }, []);

     async function handleAddDev(data) {
          const response = await api.post("/devs", data);
          setDevs([...devs, response.data]);
     }
     
     return (
          <div id="app">
               <aside>
                    <strong>Cadastrar</strong>
                    <Form onSubmit={handleAddDev} />
               </aside>
               {/* MAIN */}
               <main>
                    <ul>
                         {devs.map(dev => (
                              <Dev key={dev._id} dev={dev} />
                         ))}
                    </ul>
               </main>
          </div>
     );
}

export default App;
