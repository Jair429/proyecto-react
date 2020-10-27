// import React, { Fragment } from "react";
import "./styles/styles.scss";
import Curso from "./Curso";

const App = () => (
  <>
    <div class="main-banner img-container l-section" id="main-banner">
      <div class="ed-grid lg-grid-6">
        <div class="lg-cols-4 lg-x-2">
          <img
            class="main-banner__img"
            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="banner"
          />
          <div class="main-banner__data s-center">
            <p class="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="https://ed.team" class="button">
              Suscribirse
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
);

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN sólo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: class => className
// 7: for => htmlFor
