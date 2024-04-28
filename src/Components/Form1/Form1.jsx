const Form1 = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(e);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log(e.target.password.value); 
    }
    const inputClass='w-full border-2 rounded-lg p-4 mb-8';
    return (
        <div className="bg-slate-50 w-1/3 mx-auto p-4 rounded-lg">
            <form onSubmit={handleSubmit}>
                <input className={inputClass} placeholder="Name" type="text" name="name" /><br />
                <input className={inputClass} placeholder="Email" type="email" name="email" /><br />
                <input className={inputClass} placeholder="Phone" type="phone" name="phone" /><br />
                <input className={inputClass} placeholder="Password" type="password" name="password" /><br />
                <button className="btn w-full" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form1;