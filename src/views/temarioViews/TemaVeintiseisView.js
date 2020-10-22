import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import ReactPlayer from "react-player";

class TemaVeintiseisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  state = {
    abierto: true,
  };

  abrirModal(e) {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 2.3 Transformación Digital</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h3 style={{ color: "red", textAlign: "" }}>Para finalizar</h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Button color="primary" onClick={this.abrirModal.bind(this)}>
                  Ver video
                </Button>
              </Row>
            </Col>
          </Row>
        </CardBody>

        <Modal isOpen={this.state.abierto} style={{ width: "1200px" }}>
          <ModalHeader>
            <h3 style={{ color: "red", textAlign: "" }}>Para finalizar</h3>
          </ModalHeader>
          <ModalBody style={{ width: "100%" }} className="centrado-fila">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=kE3HUbBGu8A"
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
export default TemaVeintiseisView;
