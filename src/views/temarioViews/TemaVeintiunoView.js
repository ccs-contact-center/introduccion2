import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaVeintiunoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> 2.3 Transformación Digital</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                Transformación Digital
              </h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row >
                <Col xs="12">
                  <div className="cajaGris ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "justify" }}>
                      Los principales beneficios de adaptarse a la
                      Transformación Digital son:
                    </p>
                    <ul className="ulli" style={{ textAlign: "justify" }} >
                      <li>Alcanzar una Experiencia de Cliente positiva.</li>
                      <li>Mejorar la reputación de la marca.</li>
                      <li>Optimizar la operación para reducir tiempos y costes.</li>
                      <li>Mejorar el proceso de gestión para una toma de decisiones más flexible.</li>
                      <li>Tener una gestión centralizada para fomentar la personalización.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaVeintiunoView;
