import InputRegister from "../component/inputRegister";

const Register = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center ">
        <div className="w-150 content-center">
          <h1 className="text-center mb-5 text-4xl">Welcome to..</h1>
          <h1 className="text-center mb-5 text-xl">Your in table 01</h1>
          <InputRegister />
        </div>
      </div>
    </>
  );
};
export default Register;
