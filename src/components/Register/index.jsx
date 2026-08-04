import Aside from "../Login/Aside"
import Form from "./Form"

function Register () {  
  return (
    <section id="signUpPage" className="bg-[#FFD370]">
      <div className="mx-auto h-screen flex flex-col justify-between items-center w-full px-[31px] py-12 md:flex-row md:w-[800px] md:px-8 md:py-[87px]">
        <Aside />
        <Form />
      </div>
    </section>
  )
}

export default Register;
