import React from "react";

import LeftComponent from "./Components/LeftComponent/LeftComponent";
import MidlePages from "./Components/MidlePages/MidlePages";
import RightSitebar from "./Components/RightSitebar/RightSitebar";

const AuthenticatedApp = () => {
  return (
    <div className="authenticated">
      <LeftComponent />
      <MidlePages />
      <RightSitebar />
    </div>
  );
};

export default AuthenticatedApp;
