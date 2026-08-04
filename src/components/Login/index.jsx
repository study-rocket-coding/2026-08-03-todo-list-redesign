import Aside from "./Aside";
import SignIn from "./SignIn";

function Login() {
  return (
    <section id="loginPage" className="bg-[#FFD370]">
      <div className="mx-auto h-screen flex flex-col items-center justify-start w-full px-[31px] py-12 sm:flex-row sm:justify-between sm:w-[800px] sm:px-8 sm:py-[87px]">
        <Aside />
        <SignIn />
      </div>
    </section>
  )
}

export default Login;
