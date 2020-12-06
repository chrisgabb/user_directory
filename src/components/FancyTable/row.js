import React from "react";

const FancyTableRow = (props) => {

	const renderDataCells = props.row.cells.map(cell => (
		<td {...cell.getCellProps()}>{ cell.render("Cell") }</td>
	))

	return (<>
		<tr {...props.row.getRowProps()}>
			{ renderDataCells }
		</tr>
	</>)

}

export default FancyTableRow
