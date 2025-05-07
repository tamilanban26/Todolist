import React from 'react';
import { useParams } from 'react-router-dom';

import mathii from '../assets/mathii.jpeg';
import jeeva from '../assets/jeevaedu.jpeg';
import tamil from '../assets/tamil.jpg';
import bousi from '../assets/bousi.jpeg';
import mouli from '../assets/moulii.jpeg';

const teamData = {
  "Mathivathani": {
    role: "Role:Frontend Developer",
    bio: " Mathivathani specializes in building modern, responsive, and user-friendly frontend applications with React. She enjoys tackling complex UI challenges and ensuring a seamless user experience.",
    image: mathii,
    backgroundColor: "#ffe6e6",

  },
  "Jeeva": {
    role: "Role:Backend Developer",
    bio: "Jeeva is a backend developer with expertise in Node.js and API development. He is passionate about optimizing server performance and working with databases.",
    image: jeeva,
    backgroundColor: "#e6f2ff"
  },
  "TamilAnban": {
    role: "Role:UI/UX Designer",
    bio: "Tamilanban is a talented designer who focuses on crafting intuitive and aesthetically pleasing user interfaces that ensure an engaging user experience.",
    image: tamil,
    backgroundColor: "#f9fbe7"
  },
  "Boushica": {
    role: "Role:Project Manager",
    bio: "Boushica is a talented designer who focuses on crafting intuitive and aesthetically pleasing user interfaces that ensure an engaging user experience.",
    image: bousi,
    backgroundColor: "#fff0f5"
  },

  "Moulee": {
    role: "Role:React Developer",
    bio: "Moulee is a talented designer who focuses on crafting intuitive and aesthetically pleasing user interfaces that ensure an engaging user experience.",
    image: mouli,
    backgroundColor: "#e0ffe0"
  },


  "Siva": {
    role: "Role:JS Developer",
    bio: "Siva is a talented designer who focuses on crafting intuitive and aesthetically pleasing user interfaces that ensure an engaging user experience.",
    image: jeeva,
    backgroundColor: "#fff9e6"
  },
  "Kowsalya": {
    role: "Role: Developer",
    bio: " Kowsalya is a talented designer who focuses on crafting intuitive and aesthetically pleasing user interfaces that ensure an engaging user experience.",
    image:  mathii,
    backgroundColor: "#f9fbe7"
  },
 
};
function TeamDetails() {
  const { name } = useParams();
  const member = teamData[name];

  if (!member) return <h2>Team member not found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "2rem", backgroundColor: member.backgroundColor, height: "100vh", fontSize: member.fontSize || "20px" }}>
      <img src={member.image} alt={name} style={{ width: 200, borderRadius: '10%', }} />
      <h2>{name}</h2>
      <h3>{member.role}</h3>
      <h4>{member.bio}</h4>
    </div>
  );
}

export default TeamDetails;
