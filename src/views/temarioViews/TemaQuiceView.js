import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import quice from "../../assets/img/intro/quice.png";

class TemaQuiceView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>
                9. Outsourcing de Monitoreo de Call Center
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <img
                    src={quice}
                    style={{ width: "350px" }}
                    alt="quice "
                    className="img-fluid "
                  />
                </Col>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaGris  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        {" "}
                        Aunque es un tema controvertido, la subcontratación
                        promete traer varias mejoras
                      </b>
                      . Uno de los problemas que resuelve esta acción es la
                      flexibilidad de las evaluaciones. Además, es posible
                      enfatizar la evaluación del agente en lugar del servicio,
                      como ocurre con el autocontrol. Otras ventajas que ofrece
                      son la especialización, la reducción de conflictos de
                      intereses y un enfoque total en la satisfacción del
                      cliente.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>{" "}
        </CardBody>
      </div>
    );
  }
}
export default TemaQuiceView;
