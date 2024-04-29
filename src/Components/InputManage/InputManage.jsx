import { useEffect, useRef } from "react";

const InputManage = () => {
    const nameRef =useRef(null);
    const emailRef =useRef(null);
    const passwordRef =useRef(null);
    const handleForm=e=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleForm}>
                <input ref={nameRef} className="border-2 border-slate-700" type="text" name="name" /><br />
                <input ref={emailRef} className="border-2 border-slate-700" type="email" name="email" /><br />
                <input ref={passwordRef} className="border-2 border-slate-700" type="password" name="password" /><br />
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default InputManage;