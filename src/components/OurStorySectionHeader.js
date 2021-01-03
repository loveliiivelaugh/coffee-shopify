import React from "react";
import "./SectionHeader.scss";
//animationsss
import Fade from 'react-reveal/Fade';

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
      style={{
        backgroundColor:'rgba(0,0,0,0.6)',
        padding: '30px 25px 30px 25px'
      }}
    >
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      {props.title && (
          <h1
            className={
              "font-weight-bold" +
              (props.subtitle && props.spaced ? " mb-4" : "") +
              (!props.subtitle ? " mb-0" : "") +
              (props.size ? ` h${props.size}` : "")
            }
          >
            {props.title}
          </h1>
      )}
      </Fade>
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      {props.subtitle && (
        <p className="SectionHeader__subtitle mb-0">{props.subtitle}</p>
      )}
      </Fade>
    </header>
  );
}

export default SectionHeader;
