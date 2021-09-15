import React from "react";
import PostControl from "./PostControl";
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <div className = "main">
        <PostControl />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
