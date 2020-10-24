import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import dos from "../../assets/img/intro/dos.png";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> 2.1 La industria en el 2020</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="2">
              <Row>
                <Col xs="12">
                  <h3 style={{ color: "red", textAlign: "center" }}>Cambios</h3>
                  <div className="centrado-fila">
                  <img
                    src={dos}
                    alt="dos "
                    className="img-fluid  animated  bounceInRight delay-0s"
                  />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="10">
              <Row className="centrado-fila text-justify">
                <Col xs="6" className="centrado-fila">
                 
                  <p>
                    <b className="pRojo">
                      De Ciudades Digitales a Inteligentes
                    </b>
                    : El nivel de crecimiento poblacional presentará enormes
                    desafíos y oportunidades para las empresas, los gobiernos y
                    los ciudadanos en muchos ámbitos. Las ciudades inteligentes
                    y digitales se convertirán en una plataforma vibrante para
                    la innovación, la inclusión y la comunidad.
                  </p>
                </Col>
                <Col xs="6" className="centrado-fila">
                  <img
                    src={dos}
                    alt="dos "
                    className="img-fluid  animated  bounceInRight delay-0s"
                  />

                  <p>
                    {" "}
                    <b className="pRojo">Agentes y Algoritmos</b>: Para 2030,
                    cada uno de nosotros contará con el respaldo de un “sistema
                    operativo para la vida” altamente personalizado, los grandes
                    datos generados simplemente por la vida cotidiana informarán
                    las simulaciones y el análisis predictivo anticipará
                    nuestras necesidades y se comportará de manera Proactiva.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="centrado-fila">
              <p className="text-justify">
                <b className="pRojo">Robots con vidas social</b>: Los robots
                sociales del mañana estarán socialmente comprometidos con los
                humanos, pero también entre ellos. Cuando un robot aprende, o se
                le enseña una tarea, cargará ese conocimiento recién descubierto
                en su red social (con otros robots). Sin embargo, para que los
                robots emerjan de fábricas y laboratorios, necesitarán saber
                cómo navegar en entornos no estructurados que fueron construidos
                principalmente para habitantes humanos.
              </p>
              <img
                src={dos}
                alt="dos "
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDosView;
