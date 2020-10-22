import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> 2.1 La industria en el 2020</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: "0px" }}
              >
                <b>La industria hoy</b>
              </h2>
            </Col>
            <Col xs="12">
              <Row className="centrado-fila">
                <Col xs="8">
                  <div
                    className="cajaGris
                   ml-2 mr-2"
                  >
                    <p className="pl-3 text-justify">
                      El 2019 fue un año particularmente complejo debido a la
                      percepción de cambios en la política nacional de México
                      con la nueva administración, los problemas de inseguridad
                      en diferentes regiones del país, la incertidumbre de la
                      relación comercial con EUA
                      <br /> (T-MEC), aunado a la situación económica nacional e
                      internacional (volatilidad en el tipo de cambio, baja en
                      las tasas de intereses e inversiones, etc). <br />A pesar
                      de la complejidad de este entorno la industria en este
                      2020 ha reflejado crecimiento en todos los aspectos:
                      capacidad instalada, número de centros, empleo e ingresos.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="centrado-fila mt-3">
                <Col xs="8">
                  <div
                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    <p className="pl-3 text-justify">
                      Aunque en 2019 hubo más empresas con planes de crecimiento
                      que este año, las expectativas siguen siendo optimistas.
                      De hecho, ninguna empresa espera disminuir su capacidad el
                      siguiente año y el 94% de las empresas estima crecer o
                      mantenerse igual en cuanto al número de estaciones.{" "}
                      <b>
                        De acuerdo al censo 2019 del IMT, 26 empresas planean
                        abrir un nuevo centro, principalmente en CDMX, Jalisco y
                        Nuevo León
                      </b>
                      .
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
export default TemaUnoView;
