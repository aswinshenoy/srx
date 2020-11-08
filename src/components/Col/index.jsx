import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Col = ({
  s = null, sm = null, md = null, lg = null, xl = null,
  p = null, px = null, py = null,
  order = null, orderMD = null,
  flexCenter = false, flexVC = false, flexHC = false, flexHR = false,
  children, className,
}) => (
  <div
    className={classNames(
      s != null ? `col-${s}` : null,
      sm != null ? `col-sm-${sm}` : null,
      md != null ? `col-md-${md}` : null,
      lg != null ? `col-lg-${lg}` : null,
      xl != null ? `col-lg-${xl}` : null,
      { col: s == null && sm == null && md == null && lg == null && xl == null },
      p != null && (px == null && py == null) ? `p-${p}` : null,
      px != null && p == null ? `px-${px}` : null,
      py != null && p == null ? `py-${py}` : null,
      order != null ? `order-${order}` : null,
      orderMD != null ? `order-${orderMD}` : null,
      { 'd-flex': flexCenter || flexHC || flexVC || flexHR },
      { 'align-items-center': flexCenter || flexVC },
      { 'justify-content-center': flexCenter || flexHC },
      { 'justify-content-end': flexHR },
      className
    )}
  >
    {children}
  </div>
);

Col.propTypes = {
  s: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  p: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  px: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  py: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  order: PropTypes.number,
  orderMD: PropTypes.number,
  flexCenter: PropTypes.bool,
  flexHC: PropTypes.bool,
  flexVC: PropTypes.bool,
  flexHR: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Col;
