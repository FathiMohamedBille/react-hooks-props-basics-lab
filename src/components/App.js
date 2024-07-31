import React from "react";
 import NavBar from "./NavBar"; 
 import Home from "./Home"; 
 import About from "./About"; 
 import user from "../data/user"; 
 function App() {
 return (
 <div>
 <NavBar />
  <Home id="home" name={user.name} city={user.city} color={user.color} /> 
  <About id="about" bio={user.bio} links={user.links} /> 
  </div> 
  );
 }
  export default App;