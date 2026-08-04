import asideLg from "../../assets/login/aside-lg.png"
import asideSm from "../../assets/login/aside-sm.png"

function Aside () {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[386px]">
      <img
        className="mb-4"
        src={ asideSm }
        alt="Online todolist"
      />
      <img
        className="hidden md:block"
        src={ asideLg }
        alt="workImg"
      />
    </div>
  )
}

export default Aside;