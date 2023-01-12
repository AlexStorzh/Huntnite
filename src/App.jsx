import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import LandingPage from "./pages/LandingPage";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return <div className="App">{loading ? <Loader /> : <LandingPage />}</div>;
}

export default App;
