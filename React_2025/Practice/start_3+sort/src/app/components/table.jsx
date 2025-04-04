import React from 'react'
import PropTypes from "prop-types";

import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';

export const Table = ({ onSort, selectedSort, columns, data, children }) => {
  return (
    <table className="table">
      {children || <>
        <TableHeader {...{ onSort, selectedSort, columns }} />
        <TableBody  {...{ columns, data }} />
      </>}


    </table>
  )
}

Table.propTypes = {
  onSort: PropTypes.func,
  data: PropTypes.array,
  columns: PropTypes.object,
  selectedSort: PropTypes.object,
  children: PropTypes.array
}
