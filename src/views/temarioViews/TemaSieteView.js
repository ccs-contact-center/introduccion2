import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaSieteView extends Component {
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
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                1. Omnicanalidad
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fil ">
                  <div className="cajaGris  mt-3">
                    <p style={{ textAlign: "justify" }}>
                      <b>Omnicanalidad</b> es una estrategia en la que se
                      utilizan diversos canales de comunicación de modo
                      simultáneo. Al diversificar las posibilidades de
                      interacción entre el cliente y la empresa,{" "}
                      <b>
                        es posible mejorar la experiencia del cliente a través
                        de la integración entre los ambientes online y offline
                      </b>
                      . Para eso, se pueden utilizar canales como redes
                      sociales, aplicaciones móviles, sitios web, chatbots,
                      tiendas físicas y virtuales, blogs, email, teléfono y
                      muchos otros.
                    </p>
                  </div>
                </Col>
                <Col xs="6" className="centrado-fil ">
                  <div className="cajaRoja   mt-3">
                    <p style={{ textAlign: "justify" }}>
                      <b>En el caso los centros de contacto</b>, la tendencia es que se
                      ofrezca más de una posibilidad para la interacción entre
                      clientes y operadores. Para lograr esta diversidad, se
                      pueden utilizar canales como <b>teléfono, whatsapp, chat
                      online, redes sociales y chatbots</b>. Así el cliente puede
                      elegir la manera con la cual se siente más confortable
                      para contactarse con la empresa.
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
export default TemaSieteView;
