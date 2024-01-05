import { Button, Card, Header, Input, Label } from "../../Components";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="container flex items-center mx-auto h-screen">
        <Card className="border border-2 border-slate-950 shadow-2xl w-full max-w-sm h-max mx-auto">
          <Card className="flex flex-col m-4 ">
            <Header
              title="Sign up to Dashboard"
              className="size-fit font-bold text-3xl mx-auto"
            />
            <Label label="Username" className="size-fit" />
            <Input />
            <Label label="Email" />
            <Input />
            <Label label="Password" />
            <Input />
            <Button
              className="!bg-green-600 text-white mt-4"
              buttonValue="Sign up"
            />
          </Card>

          <Card className="flex justify-center items-center gap-2 mb-4 w-full">
            <Label label="Have an account ?" className="!mt-0" />
            <Button buttonValue="Login" onClick={() => navigate("/")} />
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default Signup;
