import React,{useState} from 'react'

export default function Form() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handelName = (e) => {
        setName(e.target.value)
    }
    const handelEmail = (e) => {
        setEmail(e.target.value)
    }
    const handelPassword = (e) => {
        setPassword(e.target.value)
    }
    const handelSubmit = (e) => {
        console.log("from is submitted");
        let userInfo = {
            userName:name,
            userEmail:email,
            userPassword:password
        }
        console.log(userInfo);
        e.preventDefault();
    }

    return (
        <div>
        <form onSubmit={handelSubmit}>
            <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" value={name} onChange={handelName} className="form-control" id="name"/>
            </div>
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={handelEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>  
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={handelPassword} className="form-control" id="exampleInputPassword1"/>
            </div>     
            <button type="submit" className="btn btn-primary">Register</button>   
         </form>
        </div>
  
       
    )
}
