import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemadiecinueveView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>13. IA</h3>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className=" centrado-fila ">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      Los clientes utilizan cada vez más sus voces para
                      interactuar con el mundo que los rodea, desde para
                      comunicarse con sus automóviles con el fin de obtener
                      direcciones, hasta para acceder a sus cuentas bancarias a
                      través de sus altavoces inteligentes. El uso de la
                      Inteligencia Artificial (IA) se está volviendo cada vez
                      más común en numerosas industrias. Desde una perspectiva
                      empresarial, eliminar la necesidad de aportes humanos para
                      llevar a cabo tareas rutinarias aumenta la eficiencia y
                      puede contribuir a una toma de decisiones más inteligente.
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
                      Algunos de los usos potenciales de IA:
                    </p>
                    <ul className="ulli" style={{ textAlign: "justify",  }}>

                 
                      <li>Servicio a cliente.</li>
                      <li>Bots.</li>
                      <li>Respuesta de voz interactiva (IVR).</li>
                      <li>Llamadas de conferencia.</li>
                      <li>Reconocimiento de patrones de trabajo.</li>
                      <li>Enrutamiento inteligente.</li>
                    </ul>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
export default TemadiecinueveView;
