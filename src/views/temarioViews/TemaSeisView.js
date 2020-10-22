import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import seis from "../../assets/img/intro/seis.png";

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 2.2 Tendencias</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>Tendencias</h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="4">
                  <img
                    src={seis}
                    style={{ width: "" }}
                    alt="seis "
                    className="img-fluid bordeImagen"
                  />
                </Col>
                <Col xs="8">
                  <p className="text-justify">
                    <b>La transformación digital supone, más que un cambio
                    tecnológico, un cambio organizacional</b>. Las nuevas
                    tecnologías han llegado como forma de impulsar mejoras en
                    los procesos de las empresas, realidad que también ocurre en
                    el sector de call centers.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaSeisView;
