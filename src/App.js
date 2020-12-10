import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Layout } from "./components/Layout";
import items from './components/FancyTable'

class App extends React.Component {

	state = {
		items
	}

	handleSubmit(e) {
		this.setState({
			input: e.target.value
		})
	}

	filterData = () => {
		let filterList = items.filter(e => e === e.target.value)
		this.setState(filterList)

	}
	handleSort = () => {
		let sortList = items.sort((a, b) => (a.department > b.department) ? 1 : -1)
		this.setState(sortList)
	}

	render() {
		return (
			<Router>
				<Layout />
			</Router>
		)
	}
}

export default App;