import { Button, Container, Card, Row } from "react-bootstrap";

function LoginPage() {
  return (
    <Container className="login-container vh-100 d-flex justify-content-center align-items-center">
      {/* <h1>LOGIN PAGE!</h1>  */}
      <Card className="login-card">
        <form className="login-form">
          <div className="p-1 mt-1">Email Address :</div>
          <input
            className="p-1 m-auto"
            type="text"
            name="email"
            placeholder="example@email.com"
          />

          <div className="p-1 ">Password :</div>
          <input
            className="p-1 mt-1 mb-2"
            type="password"
            name="password"
            placeholder="password"
          />
          <br />
          <Button
            className="loginSubmit p-1 m-2 sm"
            variant="primary"
            type="submit"
          >
            Log Me In!
          </Button>
        </form>
      </Card>
    </Container>
  );
}

export default LoginPage;
