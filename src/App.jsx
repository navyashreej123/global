import axios from "axios"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [uname, setname] = useState("");
  const [pass, setpass] = useState("");

  const data = {
    name: uname,
    pwd: pass,
  };
  async function handelsubmit(e) {
    e.preventDefault();
    const response = await axios.post("https://user-passsite-1.onrender.com", data)
    console.log(response.data);
    setname("");
    setpass("");
  }
  // const [details,setDetails] = useState("");
  // async function handelclick(){
  // const response = axios.get("http://localhost:3000/");
  // async awake or then-catch any one
  // const response = await axios.get("http://localhost:3000/");
  // console.log(response);
  // setDetails(response.data)
  // }

  return (
    <>
      <form onSubmit={handelsubmit}>

        <label htmlFor="">name</label>
        <input type="text"
          value={uname}
          onChange={(e) => { setname(e.target.value) }}
        />
        <label htmlFor="">password</label>
        <input type="password"
          value={pass}
          onChange={(e) => { setpass(e.target.value) }}
        />
        <p></p>
        <input type="submit" />
      </form>

      {/* <button onClick={handelclick}>Fetch details from backend</button>
      <h1>{details}</h1> */}
    </>
  )
}

export default App
