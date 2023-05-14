import styles from "./Login.module.css"

const Login = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-200">
    <div className={`${styles.box}`}>
        <div className={`${styles.form} shadow-xl`}>
          <h2>SIGN IN</h2>
          <form>

          
          <div className={`${styles.inputBox}`}>
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </div>
          <div className={`${styles.inputBox}`}>
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className={`${styles.links}`}>
            <a href="#">Forget password</a>
            <a href="#">Signup</a>
          </div>
          <button className="rounded-lg px-4 py-2 bg-[#975720] text-green-100 hover:bg-[#d19058] duration-300">Login</button>
          </form>
        </div>
      </div>
    </div>
  
    </>
  );
};

export default Login;
