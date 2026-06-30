function Register() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>

      <input placeholder="Name" />
      <br />
      <input placeholder="Email" />
      <br />
      <input placeholder="Password" type="password" />
      <br />
      <button>Register</button>
    </div>
  );
}

export default Register;