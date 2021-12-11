
import { useState } from 'react';
import './App.css';
import Axios from 'axios';


function App() {

  const [name,setName] = useState("");
  const [rating,setRating] = useState(0);
  const [information,setInformation] = useState("");
  const [pubList, setPubList] = useState([]);

const Addpub = () => {
  Axios.post('http://localhost:3001/create', {
    name: name,
    rating: rating,
    information: information,
  }).then(() =>{
    console.log = ("success"); 
  })
}

const getPubs = () => {
  Axios.get('http://localhost:3001/pubs').then((response) =>{
    setPubList(response.data)
  })
}

  return (

    <div className="App">
      <header className="App-header">

    
        <a href="home" class="intro__suptitle">Lviv Pubs</a>

        <div className = "btn">
        <a class="nav__link" href="home">Home</a>
        </div>
        <div className = "btn">
        <a class="nav__link" href="login">ADMIN</a>
        </div>
        <div className = "btn">
        <a class="nav__link" href="list">List</a>
        </div>
        <div className = "btn">
        <a class="nav__link" href="contacts">Contacts</a>
        </div>
        <div className = "btn">
        <a class="nav__link" href="about">about</a>
        </div>

        <div className = "btn">
      <input type ="search" placeholder="Почніть писати..." />
      <button>Search</button>
      </div>
        </header>
        <body className="Body">
        <label>Name:</label>
        <input type = "text" onChange={(event) => {
          setName(event.target.value);
          }} 
          />
           <label>Information:</label>
          <input type = "text" onChange={(event) => {
          setInformation(event.target.value);
          }} 
          />
        <label>Rating:</label>
        <input type = "number" onChange={(event) => {
          setRating(event.target.value);
          }}/>
        <button onClick={Addpub}>Add information</button>


       <div className = "intro__suptitle1">
         List
       </div>

       <div className = "hz">
        <button onClick={getPubs}> Show information </button>
       </div>
        {pubList.map((val,key) => {
          return <div className='pubs'>
            <h5>Name: {val.name}</h5>
            <h5>Information: {val.information}</h5>
            <h5>Rating: {val.rating}</h5>
          </div>
        })}

       <div className = "intro__suptitle1">
         Contacts
       </div>
       <div className='pubs'>
       <p>Якщо у Вас виникли певні запитання, побажання чи інші пропозиції стосовно роботи порталу — завжди раді зустрічі…</p>
       <img src='./images/1.jpeg'alt='facebook'/>
       <img src='./images/2.png' alt='youtube'/>
       <img src='./images/3.png' alt='instagram'/>
       <img src='./images/4.png' alt='vk'/>
       <img src='./images/5.png' alt='pinterest'/>
       </div>
     
      
       <div className = "intro__suptitle1">
         About Us
       </div>
       <div className='pubs'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
       </div>
       </body>
    </div>
    
  );
}

export default App;
