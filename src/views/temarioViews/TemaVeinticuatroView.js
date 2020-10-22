import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import veinticuatro from "../../assets/img/intro/veinticuatro.png";
import veinticuatro2 from "../../assets/img/intro/veinticuatro2.png";

class TemaVeinticuatroView extends Component {
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
                    <b>Métricas de Productividad</b>: Numero de Contactos
                    Inbound/Agentes/Semanas, Número de interacciones en las
                    redes sociales (no solo el número de interacciones por
                    teléfono, pero también por email, chat, intercambios en
                    redes sociales) son los indicadores generales que la
                    compañía necesita monitorizar.
                  </p>
                </Col>
                <Col xs="5" className="centrado-fila">
                  <img
                    src={veinticuatro}
                    style={{ width: "350px" }}
                    alt="veinticuatro "
                    className="img-fluid "
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="5" className="centrado-fila">
                  <img
                    src={veinticuatro2}
                    style={{ width: "350px" }}
                    alt="veinticuatro2 "
                    className="img-fluid "
                  />
                </Col>
                <Col xs="7" className="centrado-fila">
                  <p style={{ textAlign: "justify" }}>
                    <b>Métricas de Niveles de Servicio</b>: Tiempo medio de
                    respuesta por llamada, tasa de abandono de llamada
                    (porcentaje de llamadas que han sido conectadas por el ACD
                    que han sido desconectadas), retrasos en las colas,
                    accesibilidad al auto-servicio. Todas estas métricas
                    permitirán entregar un servicio proactivo a los clientes.
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
export default TemaVeinticuatroView;
