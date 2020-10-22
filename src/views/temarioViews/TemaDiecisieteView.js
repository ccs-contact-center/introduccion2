import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import diecisiete from "../../assets/img/intro/diecisiete.png";

class TemaDiecisieteView extends Component {
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
                11. CCM cambiará de rol
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className=" centrado-fila ">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      El papel del Contact Center Manager será considerablemente
                      menos operativo y tendrá mucho más énfasis en los aspectos
                      estratégicos de la organización como un todo. La interfaz
                      de administrador tendrá lugar en una sala de juntas y en
                      el nivel ejecutivo de la organización.
                    </p>
                  </div>
                  <img
                    src={diecisiete}
                    style={{ width: "350px" }}
                    alt="diecisiete "
                    className="img-fluid "
                  />
                </Col>

                <Col xs="6" className=" ">
                  <div className="cajaGris ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      Una función principal será garantizar que los recursos
                      suficientes y adecuados están disponibles para habilitar
                      el centro de interacción con el cliente, para funcionar a
                      un nivel estratégico y cuantificable de valor para el
                      cliente, lo que conlleva indudables ganancias.<br/> Tendrán que
                      mantener relaciones sólidas con los ejecutivos y
                      directivos de otras unidades de negocio, con el fin de
                      garantizar un alto rendimiento medido entre entidades de
                      negocio.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>{" "}
        </CardBody>
      </div>
    );
  }
}
export default TemaDiecisieteView;
