import React,{useState} from 'react'

export default function Form() {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    const [User, setUser] = useState({name:"",email:"",password:""});
    const {name,email,password} = User;
   
    const handelChange = (e) => {
        setUser({...User,[e.target.name]:e.target.value})
        
    }
    const handelSubmit = (e) => {
        console.log("from is submitted");
        console.log(User);
        e.preventDefault();
    }

    return (
        <div>
        <form onSubmit={handelSubmit}>
            <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" name="name" value={name} onChange={handelChange} className="form-control" id="name"/>
            </div>
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" value={email} onChange={handelChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>  
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" value={password} onChange={handelChange} className="form-control" id="exampleInputPassword1"/>
            </div>     
            <button type="submit" className="btn btn-primary">Register</button>   
         </form>
        </div>
  
       
    )
}
