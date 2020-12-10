import React from "react";
// Using React Table as the library to handle the filter/search and the sort
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { Col, Input, Pagination, PaginationItem, PaginationLink, Row, Table } from "reactstrap";
import FancyTableRow from "./row";
import FancyTableSearchBar from "./search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const FancyTable = (props) => {

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,

		canPreviousPage,
		canNextPage,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },

		preGlobalFilteredRows,
		setGlobalFilter,

	} = useTable({
		columns: props.headers,
		data: props.rows,
	},
		useGlobalFilter,
		useSortBy,
		usePagination,
	);

	return (<>
		<Row>
			<Col>
				<FancyTableSearchBar onChange={(e) => setGlobalFilter(e)} />
			</Col>
		</Row>
		<Row className="mt-3">
			<Col>
				<h6>Found {preGlobalFilteredRows.length} Employee(s)</h6>
			</Col>
			<Col>
				<h5>*Click the Column headings to Sort*</h5>
			</Col>
		</Row>
		<Row>
			<Col xs={12} md={6} className="mt-2 mt-md-0">
				<label>Show &nbsp;</label>
				<label>
					<Input type="select" bsSize="sm" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
						{[5, 10, 20, 30, 40, 50].map(size => (
							<option key={size} value={size}>
								{size}
							</option>
						))}
					</Input>
				</label>
				<label>&nbsp; {props.resourcePluralName}</label>
			</Col>
			<Col xs={12} md={6} className="mt-3 mt-md-0 justify-content-sm-center justify-content-between">
			</Col>
		</Row>
		<Table bordered responsive hover className="mt-4" {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr key={0} {...headerGroup.getHeaderGroupProps}>

						{headerGroup.headers.map((column) => (

							<th {...column.getHeaderProps(column.getSortByToggleProps())}>
								{column.render("Header")}
								<span>
									{column.isSorted ? (column.isSortedDesc ? (<FontAwesomeIcon icon={faArrowDown} />) : (<FontAwesomeIcon icon={faArrowUp} />)) : ''}
								</span>
							</th>

						))}

					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{page.map((row) => {
					prepareRow(row);
					return (<FancyTableRow key={row.original.email} row={row} />)
				})}
			</tbody>
		</Table>
	</>)
};

export default FancyTable