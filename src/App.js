import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {data} from './utils/API';
import {Layout} from "./components/Layout";

class App extends React.Component {

	state = {
		data
	}

	handleSubmit(e) {
		this.setState({
			input: e.target.value
		})
	}

	filterData = () => {
		let filterList = data.filter(e => e === e.target.value)
		this.setState(filterList)

	}
	handleSort = () => {
		let sortList = data.sort((a, b) => (a.department > b.department) ? 1 : -1)
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