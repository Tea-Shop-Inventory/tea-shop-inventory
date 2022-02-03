import React, {useState} from 'react';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://localhost:4040/new", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPassWord("");
        setMessage("Please verify your email and then log in");
      } else {
        setMessage("Some error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  
  return (

    
    <div className="text-center m-5-auto">
  <h2>Join us</h2>
  <h5>Create An Account</h5>
  
  <form onSubmit={handleSubmit} >
      <div>
        <input
          type="text"
          value={name}
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassWord(e.target.value)}
        />
      </div>
      <div>
          <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href='https://en.wikipedia.org/wiki/Terms_of_service#:~:text=Terms%20of%20service%20(also%20known,to%20use%20the%20offered%20service' target="_blank" rel="noopener noreferrer">terms of service</a></span>.
      </div>
      <div>
          <button  type="submit">Register</button>
      </div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
  </form>
  
</div>
  )};

export default Signup;
