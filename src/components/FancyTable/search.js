import React, {useState} from "react";
import {Input, InputGroup} from "reactstrap";

const FancyTableSearchBar = (props) => {

	const [ search, setSearch ] = useState("");

	return (<>
		<InputGroup size="sm" className="search-bar mb-md-auto">
			<Input
				type="text"
				value={search}
				placeholder="Search by all fields..."
				onChange={ (e) => { setSearch(e.target.value); props.onChange && props.onChange(e.target.value)} }
			/>
		</InputGroup>
	</>)

}

export default FancyTableSearchBar
