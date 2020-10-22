import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import trece from "../../assets/img/intro/trece.png";

class TemaCatorceView extends Component {
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
                8. Cumplimiento
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      La seguridad es un problema cada vez más importante en un
                      entorno tan interactivo como el que experimentamos hoy.
                      Una empresa que valora la seguridad de la información y
                      cumple con todas las reglas y protocolos de control, tanto
                      corporativos como externos, como las leyes, ya tiene una
                      ventaja en el mercado y los usuarios confían en ella. Para
                      los centros de llamadas que trabajan dinámicamente con
                      alta presión y comparten datos confidenciales, el
                      cumplimiento es una tendencia a considerar.
                    </p>
                  </div>
                </Col>
                <Col xs="6" className="centrado-fila ">
                  <img
                    src={trece}
                    style={{ width: "350px" }}
                    alt="trece "
                    className="img-fluid bordeImagen"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs="12" className="centrado-fila"></Col>
          </Row>{" "}
        </CardBody>
      </div>
    );
  }
}
export default TemaCatorceView;
