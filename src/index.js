import ReactDOM from "react-dom/client"
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="container">
			<nav className="navbar stick-top navbar-light bg-dark">
				<h1 className="ms-3 navbar-brand text-light">
					Rick and Morty
				</h1>
			</nav>
			<List />
		</div>
	)
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
