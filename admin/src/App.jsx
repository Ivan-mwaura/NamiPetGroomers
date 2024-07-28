import { useContext } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mainbar from "./Components/Mainbar/Mainbar";
import { AppContext } from "./Context/ApiContext";
import Login from "./Pages/Login/Login";

const App = () => {
	const { userData } = useContext(AppContext);

	return (
		<div className="App flex flex-col md:flex-row w-full h-screen">


			<>

				
			</>
			{!userData?.isLoggedIn ? (
				<>
					<div className="Sidebar w-full md:w-1/5 p-1 border-r-2 text-white">
						<Sidebar />
					</div>
					<div className="Mainbar w-full md:w-4/5 p-1 bg-white text-black">
						<Mainbar />
					</div>
				</>
			) : (
				<div className="Mainbar w-full p-1 text-black">
					<Login />
				</div>
			)}
		</div>
	);
};

export default App;
