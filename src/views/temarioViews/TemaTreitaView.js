import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaTreitaView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Universidad CCS</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="9">
              <Row>
                <Col xs="12" className="centrado-fila">
                  <div
                    className="cajaRoja
                  "
                  style={{width:"60%"}}
                  >
                    <h1>Gracias</h1>
                    <p>
                      www.ccscontactcenter.com
                      <br />
                      CDMX
                      <br />
                      Amores 321 1° piso
                      <br />
                      Col. Del Valle
                      <br />
                      C.P. 03100 <br />
                      Tel. +52 (55) 5091.9160
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
export default TemaTreitaView;
