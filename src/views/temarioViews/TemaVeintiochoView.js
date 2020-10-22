import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import conclusion1 from "../../assets/img/intro/conclusion1.png";

class TemaVeintiochoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Conclusiones</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                Conclusiones
              </h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <Row className="centrado-fila">
                      <Col xs="2">Control</Col>
                      <Col xs="3">
                        {" "}
                        <img
                          src={conclusion1}
                          style={{ width: "120px" }}
                          alt="conclusion1 "
                          className="img-fluid "
                        />
                      </Col>
                    </Row>
                    <Row className="centrado-fila">
                      <Col xs="12">
                        <p style={{ textAlign: "justify" }}>
                          Se cree que la Industria devolverá el control a los
                          consumidores, gracias a la capacidad de facilitar la
                          personalización extrema para acomodarse a estilos de
                          vida y rutinas únicas. Esto marcará el comienzo del
                          fin del approach «one size fits all».
                        </p>
                      </Col>
                    </Row>
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
export default TemaVeintiochoView;
