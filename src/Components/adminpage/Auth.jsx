import './styles.css'
function Auth() {
  return (
    <div>
        <div className="auth-section">
            <h1>Admin Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </div>
    </div>
  );
}

export default Auth;