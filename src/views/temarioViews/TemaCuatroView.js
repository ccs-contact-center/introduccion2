import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import cuatro from "../../assets/img/intro/cuatro.png";

class TemaCuatroView extends Component {
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
           
            <Col xs="12">
              <Row className="centrado-fila">
                <Col xs="4">
                  <img
                    src={cuatro}
                    style={{ width: "" }}
                    alt="cuatro "
                    className="img-fluid bordeImagen"
                  />
                </Col>
                <Col xs="8">
                  <p className="text-justify">
                    La transformación digital de los centros de contacto es una
                    realidad. El empoderamiento de los clientes a través de la
                    tecnología es un factor de destaque, así como la mejora de
                    los procesos como un todo.<br/> Ahora, cabe a las empresas
                    transformarse y modernizar sus operaciones de cara a
                    alcanzar su mejor desempeño y acompañar las tendencias del
                    mercado de call centers.
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
export default TemaCuatroView;
