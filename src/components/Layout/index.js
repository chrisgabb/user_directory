import React, {useState, useEffect} from "react";
// Using Reactstrap instead of Bootstrap
import {Container, Fade, Jumbotron} from "reactstrap";
import FancyTable from "../FancyTable";
import Footer from "../Footer";
import { UserAPI } from "../../utils/API";

const items = []

const userService = new UserAPI()

// Have to use hooks as react-table requires the use of hooks for sorting
export function Layout() {

	const [tableRows, setTableRows] = useState([]);

	useEffect(() => {

		userService.fetchUsers().then(results => setTableRows(results))


	}, [])

	return (
		<Container fluid={false}>
			<Jumbotron>
				<h1 className="display-5">Directory Service!</h1>
				<p className="lead">This is an Employee Directory</p>
				<hr className="my-2"/>
				<p>This page allows you to access non-sensitive employee data.</p>
			</Jumbotron>
			<Fade>
				<FancyTable
					headers={[
						{Header: "First Name", accessor: "firstName"},
						{Header: "Last Name", accessor: "lastName"},
						{Header: "Phone Number", accessor: "phoneNumber"},
						{Header: "Email", accessor: "email"},
						{Header: "Username", accessor: "username"},
					]}
					rows={tableRows}
				/>
			</Fade>
			<Footer/>
		</Container>
	)

}

export default Layout