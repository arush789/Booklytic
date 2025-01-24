import { CiCirclePlus } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { AdminDataProps } from "../types";
import Link from "next/link";

const AdminPage = ({ children }: AdminDataProps) => {
  return (
    <div className="px-5">
      <div className="bg-white md:p-5 shadow-md shadow-purple-200/50 rounded-xl flex">
        <div className="card w-72 bg-primary p-5 shadow-md shadow-purple-200/50 rounded-xl border-2 border-primary hidden md:block">
          <ul className="w-full flex flex-col gap-2">
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                href={"/admin/dashboard"}
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-purple-100 hover:shadow-inner  focus:text-black text-gray-700 transition-all ease-linear"
              >
                <MdSpaceDashboard className="size-7" />
                Dashboard
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                href={"/admin/users"}
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-purple-100 hover:shadow-inner   focus:text-black text-gray-700 transition-all ease-linear"
              >
                <CiCirclePlus className="size-7" />
                Users
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                href={"/admin/booksManage"}
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-purple-100 hover:shadow-inner   focus:text-black text-gray-700 transition-all ease-linear"
              >
                <ImBooks className="size-7" />
                Books
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminPage;
