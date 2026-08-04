import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router'
import { signIn } from '../../apis'
import { fields, subTitle } from "./data"

const SignInInput = ({ label, name, register, required, rules = {}, errors, ...props }) => (
  <>
    <label className="text-base font-normal mt-2.5 mb-1.5 text-gray-900" htmlFor={name}>{label}</label>
    <input
      id={name}
      className="w-full box-border font-normal bg-white text-gray-900 border border-gray-300 rounded-lg h-11 px-3.5 text-base mb-1.5 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800 placeholder:text-gray-400"
      {...props}
      {...register(name, { required, ...rules })}/>
    {errors[name] && (
      <p className="text-red-600 text-sm mt-0 mb-2">{ errors[name].message }</p>
    )}
  </>
)

function SignIn () {
  const navigate = useNavigate();
  const [errorLog, setErrorLog] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setErrorLog('');
    try {
      const result = await signIn(data.email, data.password);
      localStorage.setItem('nickname', result.nickname);
      localStorage.setItem('token', result.token);
      navigate('/todolist');

    } catch (error) {
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    }
  }

  return (
    <div className="flex-1 min-w-[300px] p-10 md:p-12 flex flex-col justify-center">
      <form className="flex flex-col mt-6" onSubmit={ handleSubmit(onSubmit) }>
        <h2 className="font-bold mb-6 text-2xl text-gray-900">
          { subTitle }
        </h2>
        {
          fields.map((field) => <SignInInput key={field.name} {...field} register={ register } errors={errors} />)
        }
        <button
          className="h-[50px] rounded-full bg-brand-800 hover:bg-brand-900 text-white border-none self-center my-5 font-bold cursor-pointer text-center text-base px-10 transition-colors"
          type="submit"
        >
          登入
        </button>
        { errorLog &&
          <p className="text-red-600 text-center mb-3 text-sm"> { errorLog } </p>
        }
        <Link
          to='/register'
          className="block text-gray-900 font-bold no-underline text-center text-sm hover:text-brand-900 transition-colors"
        >
          註冊帳號
        </Link>
      </form>
    </div>
  )
}

export default SignIn;
