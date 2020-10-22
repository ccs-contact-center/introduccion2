import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import veinticinco from "../../assets/img/intro/veinticinco.png";

class TemaVeinticincoView extends Component {
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
          <Row className="">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                Creación de métricas de performance digital
              </h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="7" className="centrado-fila">
                  <p style={{ textAlign: "justify" }}>
                    <b>Métricas de Calidad</b>: Resolución a la primera llamada,
                    encuestas, analíticas emocionales (número de comentarios
                    positivos versus negativos en las redes sociales) y
                    grabación de clientes. Estas métricas conducen a la
                    conversión de la voz del cliente que están llamando al
                    Contact Center, en un alto valor para que la compañía
                    analice las grabaciones, las interacciones y de esta manera
                    el Contact Center siempre va a encontrar la singularidad de
                    la Experiencia del Cliente.
                  </p>
                </Col>
                <Col xs="5" className="centrado-fila">
                  <img
                    src={veinticinco}
                    style={{ width: "350px" }}
                    alt="veinticinco "
                    className="img-fluid "
                  />
                </Col>
              </Row>
              
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaVeinticincoView;
