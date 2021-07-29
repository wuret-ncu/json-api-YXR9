import React, { useState } from 'react'
import './SignUp.css';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup= (e) =>{
        e.preventDefault();
        var docs = db.collection("Users");
        if (name !== "" && account !== "" && password !== "") {
            // docs.where("account", "==", account).get()
            //     .then(documentSnapshot => {
            //         documentSnapshot.forEach(doc => {
            //             if(doc.exists) {
            //                 alert("帳號已存在，請重新輸入!");
            //             } else {
            //                 alert("註冊中...");
            //             }
            //         })
            //     })
            if(account !== "WULAB") {
                docs.add({
                    name: name,
                    account: account,
                    password: password,
                })
                .then(() => {
                    alert("Signup success!");
                })
                .catch((error) => {
                    alert(error.message);
                });
                setName("");
                setAccount("");
                setPassword("");
            } else {
                alert("帳號已存在，請重新輸入!");
                setAccount("");
            }
            
        } else {
            alert("請完整填寫資料!");
        }
    }

    return (
        <form className="login" onSubmit={handleSignup}>
            <div>
                <h1 className="title">註冊</h1>
            </div>
            <input 
                type="text"
                placeholder="名稱" 
                className="input1"
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                raquired
            />
            <input 
                type="text" 
                placeholder="帳號" 
                className="input1" 
                name="account" 
                value={account} 
                onChange={(e) => setAccount(e.target.value)}
                raquired
            />
            <input 
                type="password" 
                placeholder="密碼" 
                className="input1" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                raquired
            />
            <div>
                <button className="button">
                     註冊
                </button>
            </div>
            <div>
                <span className="txt">
                    已經註冊，<Link to="/" className="link">登入</Link>
                </span>
            </div>
        </form>
    )
}

export default SignUp;