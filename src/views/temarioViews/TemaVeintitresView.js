import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import veintitres from "../../assets/img/intro/veintitres.png";

class TemaVeintitresView extends Component {
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
          <Row className="centrado-fil">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                Creación de métricas de performance digital
              </h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="12">
                  <br />
                  <p style={{ textAlign: "justify" }}>
                    La evolución y la monitorización del rendimiento y gestión
                    del contact center es una necesidad para los decisores de
                    negocio y es una parte crítica de muchas compañías. Los
                    Contact Center tienen que seguir un cuadro de mandos global
                    con 4 indicadores de negocio (KPI’s) distintos:
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="5" className="centrado-fila">
                <img
                    src={veintitres}
                    style={{ width: "350px" }}
                    alt="veintitres "
                    className="img-fluid "
                  /> 
                </Col>
                <Col xs="7" className="centrado-fila">
                
                  <p style={{ textAlign: "justify" }}>
                    <b>Métricas de Costes</b>: Coste por llamada, coste por llamada
                    entrante del Contact Center y coste por cliente para medir
                    en detalle la eficiencia de la operación del Contact Center.
                    En general las compañías dedican sus esfuerzos en los
                    clientes con un valor más grande para la marca.
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
export default TemaVeintitresView;
