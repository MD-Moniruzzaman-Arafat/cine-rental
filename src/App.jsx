import {useReducer, useState} from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {MovieContext, ThemeContext} from "./context";
import MovieList from "./movie/MovieList";
import {cardReducer, initialStage} from "./reducer/cardReducer.js";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [ state,dispatch] = useReducer(cardReducer,initialStage);

  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <MovieContext.Provider value={{state, dispatch}}>
        <div className={`h-full w-full ${darkMode ? `dark` : ''}`}>
            <ToastContainer />
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    {/* <!-- Sidebar --> */}
                    <Sidebar />

                    {/* <!-- Content --> */}
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
