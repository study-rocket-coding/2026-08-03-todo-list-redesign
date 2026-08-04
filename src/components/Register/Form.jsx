import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router'
import { fields, subTitle } from './data'
import { signUp } from '../../apis'

const Input = ({ label, name, register, required, rules = {}, errors, ...props }) => {
  const fieldError = errors[name];
  return (
    <>
      <label className="text-sm font-bold mt-4 mb-1" htmlFor={name}>{label}</label>
      <input 
        id={name}
        className="font-normal bg-white rounded-[10px] w-[304px] px-4 py-3 my-1 placeholder:text-[#9F9A91]"
        {...props}
        {...register(name, { required, ...rules })}/>
      {fieldError && (
        <p className="text-red-600 text-sm mt-1">{ fieldError.message }</p>
      )}
    </>
  )
}

function Form() {
  let navigate = useNavigate();
  const [errorLog, setErrorLog] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit 
  } = useForm();

  const onSubmit = async (data) => {
    setErrorLog(''); 
    try {
      await signUp(data.email, data.password, data.name);
      alert('恭喜成功註冊，歡迎加入');
      navigate('/');

    } catch (error) {
      console.log(error.response?.data?.message);
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試")
    }
  }

  return (
    <div>
      <form className="flex flex-col ml-0 md:ml-[100px]" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold mb-6 text-xl text-center md:text-2xl md:text-left">
          { subTitle }
        </h2>
        {
          fields.map((field) => (
            <Input key={field.name} {...field} register={ register } errors={errors} />
          ))
        }
        <button
          type="submit"
          className="w-32 h-12 rounded-[10px] bg-[#333] text-white self-center my-6 font-bold cursor-pointer text-center text-base"
        >
          註冊帳號
        </button>
        { errorLog && 
          <p className="text-red-700 text-center mb-3"> { errorLog } </p>
        }
        <Link
          to="/"
          className="block text-[#333] font-bold no-underline text-center"
        >
          登入
        </Link>
      </form>
    </div>
  )
};

export default Form;