import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaDieciseisView extends Component {
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
                10. Súper Agentes
              </h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className=" ">
                  <div className="cajaGris  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      Estos agentes tendrán todos los conocimientos, experiencia
                      y aptitudes necesarias para comprender y resolver o
                      asesorar a los clientes sobre todo tipo de cuestiones
                      relacionadas con los servicios y productos.
                      <br /> Dadas las previsiones de captación del cliente
                      multicanal, será también un requisito previo para el Súper
                      Agente tener un alto nivel de conocimiento y competencia
                      técnica. Esto les ayudará a resolver adecuadamente
                      problemas al tratar con los clientes.
                    </p>
                  </div>
                </Col>

                <Col xs="6" className=" ">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      Los agentes tendrán que ser expertos y especialistas en
                      demostrar excelentes habilidades de comunicación, alta
                      empatía, tenacidad, resistencia, habilidades de escucha
                      activa y la habilidad para manejar la alta carga
                      cognitiva.
                      <br /> También deben ser técnicamente hábil y muy capaces
                      de llegar a la solución idónea, a fin de apoyar a los
                      clientes rápidamente en la resolución de su problema.
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
export default TemaDieciseisView;
