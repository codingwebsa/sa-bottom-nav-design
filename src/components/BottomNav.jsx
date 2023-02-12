import { BiHome, BiUser, BiSearch } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
// import { CiUser } from "react-icons/ci";

const BottomNav = () => {
  return (
    <>
      <header className="fixed bottom-0 right-0 w-full flex justify-center items-center py-16">
        <nav>
          <ul className="flex bg-white text-black rounded-md py-4 px-2 shadow-custom">
            {arr.map((item, _i) => (
              <>
                <li
                  className="px-4 py-2 border-r border-r-slate-400 last:border-none cursor-pointer"
                  key={_i}
                >
                  <item.icon size={24} className="text-slate-700" />
                </li>
              </>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

const arr = [
  {
    name: "Home",
    icon: BiHome,
  },
  {
    name: "Search",
    icon: BiSearch,
  },
  {
    name: "Menu",
    icon: HiOutlineMenu,
  },
  {
    name: "User",
    icon: BiUser,
  },
];

export default BottomNav;
