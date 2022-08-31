import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

const App = () => {
  const[show, setshow] = useState(false);
  
const handleClick = () => {
  setshow(!show);
}
const [person] = useState ({
  fullName: "Mark Zuckerberg",
  bio:"Mark Zuckerberg, in full Mark Elliot Zuckerberg, (born May 14, 1984, White Plains, New York, U.S.), American computer programmer.",
  imgSrc: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg",
  profession:"Co-founder and CEO of the social-networking website Facebook." ,

});
const [count,setcount] = useState (0);
useEffect(() => {
  const interval = setInterval(() => {
    setcount((prevCount) => prevCount + 1);
  }, 1000);
  return () => {
    clearInterval(interval);
  };
}, []);
  return (
    <div className='app'>
    <div className="btn">
      <button onClick={handleClick}>show me</button>
    </div>
    <div className="main">
      {show ? (
        <div className="info">
          <div className="img">
            <img src={person.imgSrc} alt={person.fullName} />
          </div>
          <div className="names">
            <h1> Fullname: </h1>
            <h2>{person.fullName}</h2>
          </div>
          <div className="bio">
            <h1>Bio: </h1>
            <h2>{person.bio}</h2>
          </div>
          <div className="profession">
            <h1>Profession: </h1>
            <h2>{person.profession}</h2>
          </div>
        </div>
      ) : null}
      <div className="count">
        <h1>
          The component has been rendered for <span>{count}</span> seconds
        </h1>
      </div>
    </div>
    </div>
);
};

export default App;
