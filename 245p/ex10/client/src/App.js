// CSS and other resources
import "./App.css";

// External Libraries
// React Router allows us to navigate between views
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Sidebar from "./sidebar";
import LandingView from "./LandingView";
import ExampleDataView from "./SecondDataView";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      {/* helps in managing the URL and rendering the appropriate components based on the URL */}
      <BrowserRouter>
        <Header />
        <Sidebar />
        {/* uses to define the routes and their corresponding components */}
        {/* each Route maps a specific URL path to a React component. */}
        <Routes>
        {/* a component that specifies a route within the Routes component */}
          <Route index element={<LandingView />} />
          <Route path="exampledataview" element={<ExampleDataView />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;