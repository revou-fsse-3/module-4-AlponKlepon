import { Button, Card, Header, Input, Label } from "../../Components";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const loginToken = () => {
    localStorage.setItem("token", "coba");
    navigate("/dashboard"); 
  };
  return (
    <>
      <Card className="container flex items-center mx-auto h-screen">
        <Card className="border border-2 border-slate-950 shadow-2xl w-full max-w-sm h-max mx-auto">
          <Card className="flex flex-col m-4 ">
            <Header
              title="Log in to Dashboard"
              className="size-fit font-bold text-3xl mx-auto"
            />
            <Label label="E-mail" className="size-fit" />
            <Input />
            <Label label="Password" />
            <Input />
            <Button
              className="!bg-green-600 text-white mt-4"
              buttonValue="Login"
              onClick={loginToken}
            />
          </Card>

          <Card className="flex justify-center items-center gap-2 mb-4 w-full">
            <Label label="New on here ?" className="!mt-0" />
            <Button
              buttonValue="Sign up now"
              onClick={() => navigate("/signup")}
            />
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default Login;
