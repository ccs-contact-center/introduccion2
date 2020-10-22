import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaVeinteView extends Component {
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
              <Row className="centrado-fila">
                <Col xs="12">
                  <div className="cajaRoja ml-2 mr-2">
                    <br />
                    <p style={{ textAlign: "justify" }}>
                      La transformación digital se define como la orientación de
                      la Compañía para cubrir/atender a las necesidades y
                      expectativas de los nuevos clientes, según los nuevos
                      canales digitales utilizados para interactuar con las
                      marcas. Esta nueva era demanda procesos de evolución,
                      adaptación a la cultura, nueva formación en tecnología y
                      el enfoque de todos los esfuerzos de la compañía en una
                      sola dirección: <b>alcanzar una experiencia de cliente
                      óptima</b>.<br/> La adopción digital en el Contact Center,
                      habitualmente, forma parte de una estrategia global en
                      distintos departamentos de la compañía: IT, Atención al
                      Cliente, Marketing, Ventas, etc.
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
export default TemaVeinteView;
