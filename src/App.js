import React,{useState} from 'react';
import "./App.css";
import MainLayout from "./shared/MainLayout";
import Data from "../src/data/data.json";
import {Modal, Button} from 'react-bootstrap'


function App() {

  const data = Data;

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (idCard) => {
    console.log(idCard);
    var res = data.forEach(x => {
      if (x.idCard === idCard) {
        setMessage(x.cardSolutionURL);
      } else {
        console.log("Pito");
      }
    });
    console.log(res);
    //setMessage(res.cardDescription);
    setShow(true);
  }

  return (
    <MainLayout>
      <div className="title__home">
        <h1 className="text-center">Calculando proporcionalidad</h1>
      </div>
      <div class="container home__content">
        <div class="row">
          {data.map((values) => (
            <div class="col col__cards" key={values.idCard}>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={values.cardUrlImage}
                  class="card-img-top"
                  alt={values.cardTitle}
                />
                <div class="card-body">
                  <h5 class="card-title">{values.cardTitle}</h5>
                  <div className="content__description">
                    <p class="card-text">{values.cardDescription}</p>
                  </div>
                  <button
                    onClick={handleShow.bind(this, values.idCard)}
                    class="btn btn-primary"
                  >
                    Mostrar Solucion
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Solución</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={message} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal> 

    </MainLayout>
  );
}

export default App;
