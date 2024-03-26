import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Wevioo() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>WEVIOO</CardHeader>
              <CardBody>
                voici Wevioo <br /><br /><br /><br /><br /><br /><br />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Wevioo;
