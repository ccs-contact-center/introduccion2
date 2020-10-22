import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import ocho from "../../assets/img/intro/ocho.png";

class TemaOchoView extends Component {
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
          <Row >
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                2. Llamadas de retorno
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <div className=" cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "left" }}>
                      Aún en lo que se refiere a la experiencia del cliente, la
                      utilización de llamadas de retorno aparece como otro
                      aspecto que considerar. El tiempo de las personas es cada
                      vez más escaso, por lo que esperar por la disponibilidad
                      de un operador puede ser muy desagradable.
                    </p>
                  </div>
                  <img
                    src={ocho}
                    style={{ width: "150px" }}
                    alt="ocho "
                    className="img-fluid "
                  />
                </Col>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaGris  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "left" }}>
                      Las llamadas de retorno sirven para amenizar esta
                      situación. <b>Al llamar a una empresa y no encontrar un
                      operador disponible, el cliente no necesita esperar más</b>.
                      Puede colgar el teléfono y recibir de inmediato una
                      llamada una vez que algún asistente se desocupe.<br/> Esta
                      herramienta influye sobre un importante indicador clave:
                      el tiempo de espera. Al eliminar la espera de la
                      interacción con el cliente y liberarlo para desarrollar
                      otras actividades, se reduce el impacto negativo que este
                      KPI puede tener sobre la satisfacción del cliente.
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
export default TemaOchoView;
