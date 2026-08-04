import { Link } from "react-router";

function Nav() {
  const nickName = localStorage.getItem("nickname")

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
  }

  return (
    <nav className="flex justify-between px-8 pt-6 mb-4 md:mb-0">
      <h1>
        <a
          href="#"
          className="block w-[243px] h-[39px] bg-[url(https://upload.cc/i1/2022/03/23/8vTzYG.png)] bg-no-repeat indent-[101%] overflow-hidden whitespace-nowrap"
        >
          ONLINE TODO LIST
        </a>
      </h1>
      <ul className="flex text-base">
        <li className="ml-0 text-[#333] hover:text-[#d87355] md:ml-6">{ nickName } 的待辦清單</li>
        <li className="mt-[11px] md:mt-0">
          <Link
            to="/"
            className="ml-0 text-[#333] no-underline hover:text-[#d87355] md:ml-6"
            onClick={ () => handleLogOut() }
          >
            登出
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;