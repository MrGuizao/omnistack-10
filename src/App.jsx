import React from "react";
import "./App.css";

function App() {
     return (
          <div id="app">
               <aside>
                    <form action="">
                         <div className="input-block">
                              <label htmlFor="github_username">
                                   Usuário do Github
                              </label>
                              <input
                                   name="github_username"
                                   id="github_username"
                                   required
                              />
                         </div>

                         <div className="input-block">
                              <label htmlFor="techs">Tecnologias</label>
                              <input name="techs" id="techs" required />
                         </div>

                         <div className="input-group">
                              <div className="input-block">
                                   <label htmlFor="">Latitude</label>
                                   <input
                                        name="latitude"
                                        id="latitude"
                                        required
                                   />
                              </div>
                              <div className="input-block">
                                   <label htmlFor="">Longitude</label>
                                   <input
                                        name="longitude"
                                        id="longitude"
                                        required
                                   />
                              </div>
                         </div>
                         <button type="submit">Salvar</button>
                    </form>
               </aside>
               {/* MAIN */}
               <main>
                    <ul>
                         <li className="dev-item">
                              <header>
                                   <img src="https://unsplash.it/100/100" alt="" />
                                   <div className="user-info">
                                     <strong>Nome</strong>
                                     <span>techs</span>
                                   </div>
                              </header>
                              <p>resumo</p>
                              <a href="https://github.com/nome">Acessar perfil</a>
                         </li>
                         <li className="dev-item">
                              <header>
                                   <img src="https://unsplash.it/100/100" alt="" />
                                   <div className="user-info">
                                     <strong>Nome</strong>
                                     <span>techs</span>
                                   </div>
                              </header>
                              <p>resumo</p>
                              <a href="https://github.com/nome">Acessar perfil</a>
                         </li>
                         <li className="dev-item">
                              <header>
                                   <img src="https://unsplash.it/100/100" alt="" />
                                   <div className="user-info">
                                     <strong>Nome</strong>
                                     <span>techs</span>
                                   </div>
                              </header>
                              <p>resumo</p>
                              <a href="https://github.com/nome">Acessar perfil</a>
                         </li>
                         <li className="dev-item">
                              <header>
                                   <img src="https://unsplash.it/100/100" alt="" />
                                   <div className="user-info">
                                     <strong>Nome</strong>
                                     <span>techs</span>
                                   </div>
                              </header>
                              <p>resumo</p>
                              <a href="https://github.com/nome">Acessar perfil</a>
                         </li>

                    </ul>
               </main>
          </div>
     );
}

export default App;
