import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

// import diecisiete from "../../assets/img/intro/diecisiete.png";

class TemaDieciochoView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>12. WebChat</h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className=" centrado-fila ">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      El Webchat se convertirá en el canal dominante.{" "}
                      <b>
                        Esta realidad ya está siendo impulsada por las
                        preferencias de canal cliente no voz / interacciones
                        basadas en texto
                      </b>
                      , en las que el cliente desea permanecer en el navegador
                      o, preferiblemente, dentro de la aplicación.
                      <br /> El Webchat también emerge como el canal preferido
                      por los agentes, ya que las generaciones jóvenes se
                      identifican fácilmente con estos mensajes de texto y
                      modelos de chat.
                    </p>
                  </div>
                  {/* <img
                    src={diecisiete}
                    style={{ width: "350px" }}
                    alt="diecisiete "
                    className="img-fluid "
                  /> */}
                </Col>

                <Col xs="6" className=" ">
                  <div className="cajaGris ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      <b>La concurrencia de múltiples interacciones de chat (4-5
                      contratos simultáneos) impulsará la eficiencia operativa y
                      la gestión de costes</b>.<br/> El Webchat ya ha demostrado ofrecer
                      altas tasas de resolución de problemas de manera rápida y
                      concluyente (en manos de personal debidamente formado y
                      adecuadamente abastecido) y se espera que aumente
                      significativamente en el futuro.
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
export default TemaDieciochoView;
