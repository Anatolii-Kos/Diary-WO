import {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invite, setInvite] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    return (<div className='mt-40 flex flex-col items-center justify-center bg-slate-900 text-white'>
        <h1 className='mb-8 text-center text-xl'>
            {isLogin ? 'Login' : 'Registration'}
        </h1>
        <form className='flex w-1/3 flex-col mx-auto gap-5'>
            <input
                    type="text" id="login"
                    className="input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password"
                    className="input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
            />

            {!isLogin &&
                <input
                    type="text"
                    className="input"
                    placeholder="Invite code"
                    onChange={(e) => setInvite(e.target.value)}
            />}
            <button className='btn btn-green mx-auto'>Submit</button>

        </form>

        <div className='flex items-center justify-center mt-5'>
            {isLogin ? (
                <button
                onClick={() => setIsLogin(!isLogin)}
                className='text-slate-300 hover:text-white'
            >
                You don't have an account?
            </button>
            ) : (
                <button onClick={() => setIsLogin(!isLogin)}
                         className='text-slate-300 hover:text-white'
                >
                    Already have an account?
                </button>

            )}
        </div>
    </div>);
};

export default Auth;
