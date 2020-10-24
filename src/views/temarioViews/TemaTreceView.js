import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import trece from "../../assets/img/intro/trece.png";

class TemaTreceView extends Component {
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
              <h3 style={{ color: "red", textAlign: "center" }}>7. Nube</h3>
              <div className="centrado-fila"></div>
            </Col>
            <Col xs="9">
              <Row>
                <Col xs="6" className="centrado-fila ">
                  <div className="cajaGris  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "center" }}>
                      La utilización de softwares en la nube ha sido una de las
                      principales tendencias del mercado de call centers en los
                      años anteriores, y que va a seguir creciendo.
                    </p>
                    <img
                      src={trece}
                      style={{ width: "310px" }}
                      alt="trece "
                      className="img-fluid bordeImagen"
                    />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="cajaRoja  ml-2 mr-2 mt-3">
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        {" "}
                        Utilizar una solución en la nube permite una menor
                        inversión en hardware, reduciendo la estructura y los
                        costes operativos. Además, la opción ofrece una mayor
                        seguridad para las operaciones y los datos manejados
                      </b>
                      .<br /> Si bien esta tecnología estaba disponible solo
                      para grandes organizaciones, hoy en día existen soluciones
                      para empresas de todos los tamaños. Esto hace posible que
                      cualquier centro de contacto gane en agilidad y
                      flexibilidad, mejorando el desempeño de su gestión a
                      través de la utilización de sistemas sencillos,
                      optimizados y de fácil manejo, que faciliten la gestión de
                      la fuerza de trabajo.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="12" className="centrado-fila"></Col>
          </Row>{" "}
        </CardBody>
      </div>
    );
  }
}
export default TemaTreceView;
