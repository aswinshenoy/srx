import React from 'react';
import shortid from 'shortid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Col from '../Col';

const Row = ({ children, cols, colProp, className, p = 0, mt = null, mb = null, my = null }) => {
  const paddingClass = `p-${p}`;

  return (
    <div
      className={classNames(
        'row mx-0',
        paddingClass,
        my != null ? `my-${my}` : null,
        mt != null ? `mt-${mt}` : null,
        mb != null ? `mb-${mb}` : null,
        className
      )}
    >
      {cols && cols.length && cols.length > 0
        ? cols
            .filter(c => !(c == null || !c))
            .map(c => (
              <Col key={shortid.generate()} {...colProp}>
                {c}
              </Col>
            ))
        : children}
    </div>
  );
};

Row.propTypes = {
  p: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  my: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  className: PropTypes.string,
  cols: PropTypes.arrayOf(PropTypes.node),
  colProp: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Row;
