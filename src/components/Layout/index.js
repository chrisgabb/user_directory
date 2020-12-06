import React, {useState} from "react";
// Using Reactstrap instead of Bootstrap
import {Container, Fade, Jumbotron, Spinner} from "reactstrap";
import {data} from "../../utils/API";
import FancyTable from "../FancyTable";
import Footer from "../Footer";

// Have to use hooks as react-table requires the use of hooks for sorting
export const Layout = (props) => {
	const [tableRows, setTableRows] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

// Adding a setTimeout to make it look like this is performing a fetch. This is based on the "isLoading" state
// that is initially set to true but then changes to false after 1.5 seconds
	setTimeout(() => {

		setTableRows(data)

// Hide the spinner and show the data table
		setIsLoading(false)

	}, 1500)

	return (
		<Container fluid={false}>
			<Jumbotron>
				<h1 className="display-5">Directory Service!</h1>
				<p className="lead">This is an Employee Directory</p>
				<hr className="my-2"/>
				<p>This page allows you to access non-sensitive employee data.</p>
			</Jumbotron>
			{
				isLoading ?
					(<Spinner/>)
					:
					(<Fade>
						<FancyTable
							headers={[
								{Header: "First Name", accessor: "firstName"},
								{Header: "Last Name", accessor: "lastName"},
								{Header: "Phone Number", accessor: "phoneNumber"},
								{Header: "Email", accessor: "email"},
								{Header: "Department", accessor: "department"},
								{Header: "Region", accessor: "region"}
							]}
							rows={tableRows}
						/>
					</Fade>)
			}
			<Footer/>
		</Container>
	)

}