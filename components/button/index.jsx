import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../styles/button.sass';

const Button = props => {
  return (
    <button
      id={props.id ? props.id : null}
      className={classNames(
        {'d-block w-100' : props.fullWidth},
        {'button-disabled' : props.disabled},
        {'button-inverse' : props.onHoverInvert},
        {[`button-${props.size}`] : props.size},
        props.bg ? {[`bg-${props.bg.color}`] : props.bg.color} : null,
        props.bg ? {[`lg-${props.bg.gradient} b-none`] : props.bg.gradient} : null,
        {[`rounded-${props.rounded}`] : props.rounded},
        {[`elevation-${props.elevation}`] : props.elevation},
        'button',
        props.className
      )}
      disabled={props.disabled}
      style={props.style}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps ={
  disabled: false,
  onHoverInvert: false,
  fullWidth: false,
  size: "md"
};

Button.propTypes = {
  /*
  *  Background for the Button
  */
  bg: PropTypes.shape({
    color: PropTypes.string,
    gradient: PropTypes.string
  }),
  /*
  *  Whether the button is disabled
  */
  disabled: PropTypes.bool,
  /*
  *  Custom classNames for the button
  */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  /*
  *  Elevation for the button
  */
  elevation: PropTypes.number,
  /*
  *  Whether the button should be fill full width available
  */
  fullWidth: PropTypes.bool,
  /*
  * Whether to invert colours on hover
  */
  onHoverInvert: PropTypes.bool,
  /*
  *  Additional overrideable styles for the hero
  */
  style: PropTypes.object,
  /*
  *  text to shown inside the button
  */
  text: PropTypes.string.isRequired,
};

export default  Button;