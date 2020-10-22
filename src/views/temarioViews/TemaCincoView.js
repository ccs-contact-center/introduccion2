import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import cinco from "../../assets/img/intro/cinco.png";

class TemaCincoView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>Tendencias</h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="8">
                  <p className="text-justify">
                    Las tendencias sugieren que el <b>uso de tecnologías
                    innovadoras va a consolidarse como manera de optimizar
                    operaciones y satisfacer a los clientes</b>. Soluciones que
                    antes eran adoptadas solo en grandes compañías ahora están
                    en expansión rumbo a las medianas y pequeñas empresas,
                    permitiendo que todos se beneficien de los avances del
                    mercado.
                  </p>
                </Col>
                <Col xs="4">
                  <img
                    src={cinco}
                    style={{ width: "" }}
                    alt="cinco "
                    className="img-fluid bordeImagen"
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
export default TemaCincoView;
