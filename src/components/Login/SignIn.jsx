import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router'
import { signIn } from '../../apis'
import { fields, subTitle } from "./data"

const SignInInput = ({ label, name, register, required, rules = {}, errors, ...props }) => (
  <>
    <label className="text-sm font-bold mt-4 mb-1" htmlFor={name}>{label}</label>
    <input 
      id={name} 
      className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
      {...props}
      {...register(name, { required, ...rules })}/>
    {errors[name] && (
      <p className="text-red-600 text-sm mt-1">{ errors[name].message }</p>
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
    <div>
      <form className="flex flex-col ml-0 sm:ml-[100px]" onSubmit={ handleSubmit(onSubmit) }>
        <h2 className="font-bold mb-6 text-xl text-center sm:text-2xl sm:text-left">
          最實用的線上待辦事項服務
        </h2>
        {
          fields.map((field) => <SignInInput key={field.name} {...field} register={ register } errors={errors} />)
        }
        <button
          className="w-32 h-12 rounded-[10px] bg-[#333] text-white self-center my-6 font-bold cursor-pointer text-center text-base"
          type="submit"
        >
          登入
        </button>
        { errorLog && 
          <p className="text-red-700 text-center mb-3"> { errorLog } </p>
        }
        <Link
          to='/register'
          className="block text-[#333] font-bold no-underline text-center"
        >
          註冊帳號
        </Link>
      </form>
    </div>
  )
}

export default SignIn;