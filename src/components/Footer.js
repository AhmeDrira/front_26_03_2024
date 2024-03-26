import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.wevioo.com/fr"
                target="_blank"
              >
                Wevioo
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Drira
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Feres
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
