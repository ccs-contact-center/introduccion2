import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="5" lg="5">
              <div className="align-middle animated rubberBand delay-0s">
                <p className="cajaA1 text-center">
                  Dar a conocer las tendencias y retos de hoy en la industria
                  para que el personal de CCS estemos en el mismo camino hacía
                  la renovación y actualización de la empresa.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default ObjetivoView;
