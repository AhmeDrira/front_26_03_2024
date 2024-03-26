import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function SignUp() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>SIGN UP</CardHeader>
              <CardBody>
                sign up here <br /><br /><br /><br /><br /><br /><br />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignUp;
