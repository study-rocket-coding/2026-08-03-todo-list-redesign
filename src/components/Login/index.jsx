import Aside from "./Aside";
import SignIn from "./SignIn";

function Login() {
  return (
    <section id="loginPage" className="min-h-screen flex items-center justify-center bg-emerald-50 p-6">
      <div className="flex flex-wrap w-full max-w-[820px] bg-white rounded-2xl overflow-hidden shadow-xl">
        <Aside variant="login" />
        <SignIn />
      </div>
    </section>
  )
}

export default Login;
