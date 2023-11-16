import "./sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
      {/* Each Route maps a specific URL path to a React component. */}
        <Link to="/">Landing View</Link>
        <Link to="exampledataview">Example Data View</Link>
      </div>
    </>
  );
}

export default Sidebar;