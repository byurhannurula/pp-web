import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationComponent = () => {
  return (
    <nav aria-label="SessionPagination">
      <Pagination
        className="pagination justify-content-end mb-0"
        listClassName="justify-content-end mb-0"
      >
        <PaginationItem className="disabled">
          <PaginationLink href="#pablo" tabIndex="-1">
            <i className="fas fa-angle-left" />
            <span className="sr-only">Previous</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="active">
          <PaginationLink href="#pablo">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="disabled">
          <PaginationLink href="#pablo">
            <i className="fas fa-angle-right" />
            <span className="sr-only">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
  )
}

export default PaginationComponent
