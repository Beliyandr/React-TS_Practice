import React from 'react'

export const Pagination = ({ itemCount, pageSize, onPageChange, currentPage, onHandleNextPage, onHandlePrevPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  const disabledLeft = currentPage === 1;
  const disabledRight = currentPage === pageCount


  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  if (pageCount === 1) return null;


  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={"page-link " + (disabledLeft ? 'disabled' : '')} href="#"
            onClick={() => { onHandlePrevPage(!disabledLeft) }}
          >
            Previous
          </a>
        </li>
        {pages.map(page => (
          <li key={'page_' + page} className={"page-item" + (page === currentPage ? ' active' : '')}><a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a></li>
        ))}
        <li className="page-item">
          <a
            onClick={() => { onHandleNextPage(!disabledRight) }}
            className={"page-link " + (disabledRight ? 'disabled' : '')}
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}
