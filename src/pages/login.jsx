export default function Login() {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Welcome! Please enter your credentials to login to the platform:</p>
      <form>
        <input placeholder="email" type="email" name="email" />
        <input placeholder="password" type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
