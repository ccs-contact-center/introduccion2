import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaVeintidosView extends Component {
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
                Transformación del liderazgo y dar poder de decisión a los
                agentes
              </h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="12">
                  <div className="cajaGris ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "justify" }}>
                      El liderazgo digital en el Contact Center no es un cargo,
                      sino una competencia. Los líderes y supervisores necesitan
                      preparar sus equipos y motivar a sus agentes para ofrecer
                      una experiencia buena y real a la hora de fidelizar a los
                      clientes.
                    </p>
                    <ul className="ulli" style={{ textAlign: "justify" }}>
                      <li>Resolviendo problemas que presente el agente.</li>
                      <li>Formando a los agentes en las nuevas tecnologías.</li>
                      <li>
                        Estar pendiente del feedback de los agentes en esta
                        transformación.
                      </li>
                      <li>Motivar al equipo de trabajo.</li>
                      <li>Apoyar al equipo nuevo de Multi-tarea.</li>
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
export default TemaVeintidosView;
