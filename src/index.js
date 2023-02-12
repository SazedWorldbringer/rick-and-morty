import ReactDOM from 'react-dom/client'
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='container'>
			<h1>Rick and Morty</h1>
			<List />
		</div>
	)
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
