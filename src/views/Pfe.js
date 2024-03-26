import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Pfe() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>PFE</CardHeader>
              <CardBody>
                bonjour<br /><br /><br /><br /><br /><br /><br />aaa
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pfe;
