import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
