import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class TemarioView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Temario</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <Table bordered className="cajaA1">
                <thead style={{ background: "#c52d49" }} className="cajaA1">
                  <tr>
                    <th colSpan="3">
                      {" "}
                      <p
                        className="text-white text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        2. Introducción al Centro de Contacto. Los retos hoy
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{ background: "#c52d49" }}
                  className="cajaA1 text-white"
                >
                  <tr>
                    <td style={{ width: "25%", verticalAlign: "middle" }}>
                      <b>2.1 La industria en el 2020</b>
                    </td>
                    <td style={{ width: "25%", verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.7 Nube
                    </td>
                    <td style={{ width: "25%", verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.3.1 Transformación del liderazgo y dar
                      poder de decisión a los agentes
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.1.1 Cambios
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.8 Cumplimiento
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.3.2 Creación de métricas de performance
                      digital
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2 Tendencias
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.9 Outsourcing de Monitoreo de Call Center
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp;2.3.4 Creación de métricas de performance
                      digital
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.1 Omnicanalidad
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.10 Súper Agentes
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>2.4 Conclusiones</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.2 Llamadas de retorno
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.11 CCM cambiará de rol
                    </td>
                    <td style={{ verticalAlign: "middle" }}></td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.3 Autoservicio
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.12 WebChat
                    </td>
                    <td style={{ verticalAlign: "middle" }}></td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.4 Redes Sociales
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.13 IA
                    </td>
                    <td style={{ verticalAlign: "middle" }}></td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.5 Chabots
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>2.3 Transformación Digital</b>
                    </td>
                    <td style={{ verticalAlign: "middle" }}></td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      &nbsp;&nbsp; 2.2.6 Big Data
                    </td>
                    <td style={{ verticalAlign: "middle" }}></td>
                    <td style={{ verticalAlign: "middle" }}></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemarioView;
