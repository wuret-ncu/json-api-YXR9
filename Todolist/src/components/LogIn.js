import React, { useState } from 'react';
import './SignUp.css';
import { Link, useHistory } from 'react-router-dom';
import { db } from '../firebase';

const LogIn = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn= (e) =>{
        e.preventDefault();
        if (name !== "" && account !== "" && password !== "") {
            db.collection("Users")
            .where("account", "==", account).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(doc.exists) {
                        alert("登入中...");
                        history.push('/todolist');
                        setName("");
                        setAccount("");
                        setPassword("");
                    } else {
                        alert("您尚未註冊唷~");
                    }
                })
            })
        } else {
            alert("登入資料未填寫完整~");
        }
        
    }

    return (
        <form className="login" onSubmit={handleLogIn}>
            <h1 className="title">登入</h1>
            <input 
                type="text"
                placeholder="名稱" 
                className="input1"
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
                raquired
            />
            <input 
                type="text" 
                placeholder="帳號" 
                className="input1" 
                name="account" 
                value={account} 
                onChange={(e) => setAccount(e.target.value)}
                autoComplete="off"
                raquired
            />
            <input 
                type="password" 
                placeholder="密碼" 
                className="input1" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                raquired
            />
            <button className="button">登入</button>
            <span className="txt">
               沒有帳號，
                <Link to="/signup" className="link">快速註冊</Link>
            </span>
        </form>
    )
}

export default LogIn;