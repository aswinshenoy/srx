import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
/* Imports helper functions for converting props to bootstrap notations */
import {
  getColWidthClass,
  getOrderClass,
  getStyleClass,
} from '../../utility/BootstrapNotation';

const Col = props => {
  return (
    <div
      className={classNames(
        'col',
        getOrderClass(props.order),
        getColWidthClass(props.width),
        getStyleClass('p', props.p),
        getStyleClass('m', props.m),
        props.className
      )}
      id={props.id}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

Col.propTypes = {
  /*
   * Additional custom class names for the column
   */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  /*
   * Margin for the column.
   * Either accepts a single value and applies for all sides,
   * or accepts an array of 2 values [horizontal, vertical], or 4 values [top, right, bottom, left].
   * Values should be in the range - [0,5]
   */
  m: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  /*
   * Order of the column.
   */
  order: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  /*
   * Padding for the column
   * Either accepts a single value and applies for all sides,
   * or accepts an array of 2 values [horizontal, vertical], or 4 values [top, right, bottom, left].
   * Values should be in the range - [0,5]
   */
  p: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  /*
   *  Additional overrideable styles for the column
   */
  style: PropTypes.object,
  /*
   * Width of the column
   */
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  ]),
};

export default Col;
