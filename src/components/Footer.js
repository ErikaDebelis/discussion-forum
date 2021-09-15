import React from "react";
import { Stars } from 'react-bootstrap-icons';
import Card from "react-bootstrap/Card";
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

function Footer(){
  return(
    <React.Fragment>
      <div className = "footer">
        <Card>
          <Card.Footer>
            <p><Stars /> {new Date().getFullYear()} Copyright | Erika Debelis <a href="https://github.com/ErikaDebelis"> <Github /></a>  <a href="https://www.linkedin.com/in/erika-debelis/"> <Linkedin /> </a> | Araceli Valdovinos <a href="https://github.com/aracelivaldovinos"> <Github /></a>  <a href="https://www.linkedin.com/in/araceli-valdovinos/"> <Linkedin /> </a> | Godfrey Owidi <a href="https://github.com/godfreyowidi"> <Github /></a>  <a href="https://www.linkedin.com/in/godfrey-owidi/"> <Linkedin /> </a> <Stars /></p>

          </Card.Footer>
        </Card>
      </div>
    </React.Fragment>

  );
}

export default Footer;