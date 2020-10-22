import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import conclusion1 from "../../assets/img/intro/conclusion1.png";

class TemaVeintisieteView extends Component {
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
                      <Col xs="2">Cambios</Col>
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
                          Las nuevas tecnologías son catalizadores para el
                          cambio y posibilitan nuevas capacidades empresariales
                          cuando se aplican adecuadamente. El camino hacia el
                          éxito en el futuro comienza ahora. Las empresas en
                          América Latina tendrán mayores posibilidades de ser
                          exitosos si se encuentran bien preparadas para
                          capitalizar el valor de estas nuevas tecnologías a
                          medida que alcancen progresivamente su madurez. En
                          esta nueva etapa, cada paso que den, cuenta.
                          <br />{" "}
                          <b>
                            Por lo tanto, queremos ser líderes en esta nueva era
                            post-digital que comienza, debemos empezar ya mismo
                          </b>
                          .
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
export default TemaVeintisieteView;
