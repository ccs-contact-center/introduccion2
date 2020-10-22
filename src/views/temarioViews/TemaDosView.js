import React, { Component } from "react";
import {
  CardBody,
  Col,
  Row,
  CardHeader,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import dos from "../../assets/img/intro/dos.png";
import ReactPlayer from "react-player";


class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  state = {
    abierto: false,
  };

  abrirModal(e) {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 2.1 La industria en el 2020</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: "0px" }}
              >
                <b>Cambios</b>
              </h2>
            </Col>
            <Col xs="12" className="centrado-fila mb-3">
              <div style={{ background: "yellow" }}>
                <p className="mt-3 ml-2 mr-2">
                  <b>Previo: Algunas tendencias</b>
                </p>
              </div>
              &nbsp;
              &nbsp;
              <div>
                <Button color="primary" onClick={this.abrirModal.bind(this)}>
                  Ver video
                </Button>
              </div>
            </Col>
            <Col xs="12">
              <p>
                Ahora que comenzamos una nueva década, surgen muchas preguntas
                sobre cuáles serán los cambios que estaremos viviendo en este
                futuro próximo.
                <br />
                <b>
                  Entre los grandes cambios que vamos a vivir, producto de las
                  tecnologías emergentes que impactarán nuestras vidas, este
                  estudio destacan:
                </b>
              </p>
            </Col>
            <Col xs="12" className="text-justify">
              <Row className="centrado-fila">
                <Col xs="6" className="centrado-fila">
                  <div>
                  <img
                      src={dos}
                      alt="dos "
                      className="img-fluid  animated  bounceInRight delay-0s"
                    />
                  </div>
                  <div>
                    <p>
                      <b className="pRojo">Realidad conectada en Red</b>: La
                      línea entre lo virtual y lo real se desvanecerá, el
                      ciberespacio ya no será un lugar al que se accede a través
                      de la pantalla de una computadora, sino más bien una
                      superposición sobre nuestra realidad existente.
                    </p>
                  </div>
                </Col>
                <Col xs="6" className="centrado-fila">
                  <p>
                    <b className="pRojo">Movilidad Conectada</b>: Las
                    computadoras móviles tomarán la forma de vehículos autónomos
                    que recorrerán las arterias de ciudades inteligentes y
                    digitales. Se estima que el 50% de los líderes en el 2030 se
                    transportará en vehículos autónomos.
                  </p>
                  <img
                      src={dos}
                      alt="dos "
                      className="img-fluid  animated  bounceInRight delay-0s"
                    />
                
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
        <Modal isOpen={this.state.abierto} style={{ width: "1200px" }}>
          <ModalBody style={{ width: "100%" }} className="centrado-fila">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=bD1iOVNGtMA"
              playing
            />
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.abrirModal.bind(this)}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default TemaDosView;
