import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end mr3">
        <p
          onClick={() => onRouteChange("signout")}
          className="f4 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav className="flex justify-end mr3">
          <p
            onClick={() => onRouteChange("signin")}
            className="f4 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f4 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
