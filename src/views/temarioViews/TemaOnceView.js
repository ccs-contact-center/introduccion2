import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import once from "../../assets/img/intro/once.png";

class TemaOnceView extends Component {
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
          <Row className="">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>5. Chatbots</h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <img
                    src={once}
                    style={{ width: "" }}
                    alt="once "
                    className="img-fluid "
                  />
                </Col>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "center" }}>
                      Aunque ya implementados, los chatbots todavía son una
                      tecnología en desarrollo. Entre sus ventajas, está la
                      posibilidad de establecer conversaciones de manera
                      automática, resolviendo problemas previsibles.
                      <br /> En el caso de que el problema no sea resuelto, los
                      chatbots pueden pasar la conversación para un asistente
                      humano, que se ocupará de atenderlos.
                    </p>
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
export default TemaOnceView;
