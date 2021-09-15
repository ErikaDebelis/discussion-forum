import React from "react";
import { Stars } from 'react-bootstrap-icons';
import { Flower3 } from 'react-bootstrap-icons';
import { EmojiSunglasses } from 'react-bootstrap-icons';
import Card from "react-bootstrap/Card";
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

function Footer(){
  return(
    <React.Fragment>
      <div className = "footer">
        <Card>
          <Card.Footer>
            <p>{new Date().getFullYear()} Copyright Erika Debelis<Stars /> <a href="https://github.com/ErikaDebelis"> <Github /></a>  <a href="https://www.linkedin.com/in/erika-debelis/"> <Linkedin /> </a> Araceli Valdovinos<Flower3 /> <a href="https://github.com/aracelivaldovinos"> <Github /></a>  <a href="https://www.linkedin.com/in/araceli-valdovinos/"> <Linkedin /> </a> Godfrey Owidi<EmojiSunglasses /> <a href="https://github.com/godfreyowidi"> <Github /></a>  <a href="https://www.linkedin.com/in/godfrey-owidi/"> <Linkedin /> </a> </p>

          </Card.Footer>
        </Card>
      </div>
    </React.Fragment>

  );
}

export default Footer;