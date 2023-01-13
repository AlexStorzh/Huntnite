import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import LandingPage from "./pages/LandingPage";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return <div className="App">{loading ? <Loader /> : <LandingPage />}</div>;
}

export default App;
