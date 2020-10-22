import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import diez from "../../assets/img/intro/diez.png";

class TemaDiezView extends Component {
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
                4. Redes sociales
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <img
                    src={diez}
                    style={{ width: "" }}
                    alt="diez "
                    className="img-fluid "
                  />
                </Col>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaGris  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "center" }}>
                      Las redes sociales son también espacio para atender a los
                      clientes sin resignar la calidad. Las personas pasan una
                      gran cantidad de horas en estos ambientes virtuales, por
                      lo que es natural que aprovechen su tiempo para conectarse
                      con empresas.
                      <br /> Pensando en ello, las organizaciones deben estar
                      preparadas para atender demandas por medio de canales como
                      Facebook, Twiter, LinkedIn, Youtube e Instagram.
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
export default TemaDiezView;
