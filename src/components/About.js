 import React from "react";
 import Links from "./Links"; 
 function About({ bio, links, id }) { 
return (
 <div id={id}> {bio && bio !== "" && <p>{bio}</p>} 
 <Links github={links.github} linkedin={links.linkedin} /> 
 </div> 
 );
  } 
  export default About;
