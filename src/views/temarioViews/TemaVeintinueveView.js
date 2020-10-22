import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import conclusion1 from "../../assets/img/intro/conclusion1.png";

class TemaVeintinueveView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Conclusiones</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="3">
              <h3 style={{ color: "red", textAlign: "center" }}>
                Conclusiones
              </h3>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila">
                <Col xs="12">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <Row className="centrado-fila">
                      <Col xs="2">CX</Col>
                      <Col xs="3">
                        {" "}
                        <img
                          src={conclusion1}
                          style={{ width: "120px" }}
                          alt="conclusion1 "
                          className="img-fluid "
                        />
                      </Col>
                    </Row>
                    <Row className="centrado-fila">
                      <Col xs="12">
                        <p style={{ textAlign: "justify" }}>
                          “El que ofrezca la mejor experiencia es el que va a
                          ganar el terreno en la transformación digital y tendrá
                          una ventaja competitiva muy importante en la industria
                          que esté participando. Esa experiencia de cara al
                          cliente, se va a dar de diferentes formas entendiendo
                          lo que necesita el cliente final a través de datos,
                          analíticos y así es cómo las empresas van a comprender
                          qué estrategias son mejores para su negocio”
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          <b>
                            Saúl Olivera, Regional Sales Manager,
                            <br />
                            Architectures Commercial Segment de Cisco
                          </b>
                        </p>
                      </Col>
                    </Row>
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
export default TemaVeintinueveView;
