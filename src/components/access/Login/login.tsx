const Login = (): JSX.Element => {
  return (
    <>
      <h2>Login Component</h2>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Contraseña" />
        <button type="button">Login</button>
      </form>
    </>
  );
} 

export { Login };