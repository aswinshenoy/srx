import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Table = props => {
  return (
    <table>
      <thead>
        <th>
          {
            columns.map( col => get)
          }
        </th>
      </thead>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object)
};

export default Table;