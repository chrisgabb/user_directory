import axios from "axios";

export class UserAPI {

    api = "https://randomuser.me/api/?results=500"

    async fetchUsers() {

    	// Create an empty collection
        let results = [];

        // Perform the API fetch
        let response = await axios.get(this.api)

	    // If the API fetch was successful, retrieve the result set
        if (response.data != null && response.data.results != null)
            results = response.data.results;

        // Immediately return an empty literal if the result set is empty
        if (results.length <= 0)
        	return []

	    // Convert the result set for table view
	    return results.map((element, index) => {

	        return {
		        id: index + 1,
		        firstName: element.name.first,
		        lastName: element.name.last,
		        email: element.email,
		        username: element.login.username
	        }

        })

    }

}


