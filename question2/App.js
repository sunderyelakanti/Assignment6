import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const {  items } = this.state;
		
		return (
		<div className = "App">
			<h1> Fetch data from api </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.username },
					
					</ol>
				))
			}
		</div>
	);
}
}

export default App;