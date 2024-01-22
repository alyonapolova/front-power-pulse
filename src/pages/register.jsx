export default function Register() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <form>
        <input placeholder="name" type="text" name="name" />
        <input placeholder="email" type="email" name="email" />
        <input placeholder="password" type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
