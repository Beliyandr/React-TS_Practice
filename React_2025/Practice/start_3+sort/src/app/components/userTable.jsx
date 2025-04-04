import React from 'react'
import PropTypes from "prop-types";
import BookMark from './bookmark'
import { QualitiesList } from './qualitiesList';
import { Table } from './table';
import { TableHeader } from './tableHeader';
import { TableBody } from './tableBody';

export const UserTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {

  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: { name: 'Качество', component: (user => (<QualitiesList qualities={user.qualities} />)) },
    professions: { path: 'name', name: 'Профессия' },
    completedMeeting: { path: 'completedMeeting', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark', name: 'Избранное', component: (user) => (<BookMark
        status={user.bookmark}
        onClick={() => onToggleBookMark(user._id)}
      />)
    },
    delete: {
      component: (user) => (
        <button
          onClick={() => onDelete(user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      )
    }
  }

  return (

    <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} >

      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody  {...{ columns, data: users }} />

    </Table>

  )
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}


