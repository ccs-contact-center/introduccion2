import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

import doce from "../../assets/img/intro/doce.png";

class TemaDoceView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>6. Big Data</h3>
              <img
                src={doce}
                style={{ width: "230px" }}
                alt="doce "
                className="img-fluid bordeImagen"
              />
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaGris  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "center" }}>
                      El actual escenario digital permite la captura de una gran
                      cantidad de información. Debido a las redes sociales, al
                      análisis comportamental y el registro de páginas
                      visitadas, hoy en día es posible tener más datos sobre el
                      cliente. Esto permite un tratamiento estratégico de los
                      datos, que pueden ser utilizados para personalizar
                      interacciones y proporcionar experiencias únicas.
                     
                    </p>
                  </div>
                </Col>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "center" }}>
                      En el ámbito de los call centers, esta realidad permite un
                      mejor gerenciamiento del banco de datos. Es posible
                      comprender mejor al cliente y direccionar la atención de
                      manera que permita generar mejores resultados. En este
                      contexto, se destaca la grabación de llamadas. Al
                      almacenarlas y gerenciar su información, es posible
                      acceder a datos de gran valor.
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="12" className="centrado-fila">
             
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDoceView;
