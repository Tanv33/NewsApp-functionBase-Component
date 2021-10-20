import "./App.css";
import React, { useState } from "react";
import MyNavbar from "./components/Navbar/MyNavbar";
import News from "./components/News/News";
import { Switch, Route } from "react-router-dom";

function App() {
  const apiKey = process.env.REACT_APP_MY_APIKEY;
  const pageSize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {progress !== 100 ? (
        <div
          className="progress"
          style={{
            height: "3px",
            position: "fixed",
            width: "100%",
            zIndex: "8",
            top: "0",
          }}
        >
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      ) : (
        console.log()
      )}
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <News
            progress={setProgress}
            key="general"
            apiKey={apiKey}
            pageSize={pageSize}
            country="in"
            category="general"
          />
        </Route>
        <Route exact path="/business">
          <News
            progress={setProgress}
            key="business"
            apiKey={apiKey}
            pageSize={pageSize}
            country="in"
            category="business"
          />
        </Route>
        <Route exact path="/entertainment">
          <News
            progress={setProgress}
            key="entertainment"
            apiKey={apiKey}
            pageSize={pageSize}
            country="in"
            category="entertainment"
          />
        </Route>
        <Route exact path="/health">
          <News
            progress={setProgress}
            key="health"
            apiKey={apiKey}
            pageSize={pageSize}
            country="in"
            category="health"
          />
        </Route>
        <Route exact path="/science">
          <News
            progress={setProgress}
            key="science"
            apiKey={apiKey}
            pageSize={pageSize}
            country="in"
            category="science"
          />
        </Route>
        <Route exact path="/sports">
          <News
            progress={setProgress}
            key="sports"
            apiKey={apiKey}
            pageSize={pageSize}
            country="in"
            category="sports"
          />
        </Route>
        <Route exact path="/technology">
          <News
            progress={setProgress}
            key="technology"
            apiKey={apiKey}
            pageSize={pageSize}
            country="in"
            category="technology"
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
