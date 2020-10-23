import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import nueve from "../../assets/img/intro/nueve.png";

class TemaNueveView extends Component {
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
                3. Autoservicio
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <img
                    src={nueve}
                    style={{ width: "230px" }}
                    alt="nueve "
                    className="img-fluid bordeImagen"
                  />
                  <div className=" cajaRoja   ">
                    <p style={{ textAlign: "justify" }}>
                      Empoderar los clientes y dejarlos resolver demandas por sí
                      mismos puede mejorar la experiencia que ellos tienen con
                      la empresa. Cada vez más, es posible resolver problemas de
                      manera automatizada, evitando ocupar asistentes o producir
                      tiempos de espera innecesarios.
                    </p>
                  </div>
                </Col>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaGris ">
                    <p style={{ textAlign: "justify" }}>
                      En este contexto, hay dos puntos muy importantes que
                      considerar. <b>El primero es la disponibilidad de contenido
                      informativo</b>. FAQs, tutoriales, e-books y guías deberían
                      estar disponibles para ayudar al cliente a pasar por todas
                      las etapas con éxito. Además, chatbots automatizados
                      pueden ayudar a solventar dudas previsibles y sencillas. <br />
                     <b> El segundo es la accesibilidad</b>.
                      Hay que acordarse de los portadores de necesidades
                      especiales y proyectar soluciones que les atiendan de
                      manera efectiva. La calidad del servicio puede verse
                      comprometida si no todos los clientes son capaces de
                      resolver problemas por sí mismos.
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
export default TemaNueveView;
