import { CiCirclePlus } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { AdminDataProps } from "../types";
import Link from "next/link";

const AdminPage = ({ children }: AdminDataProps) => {
  return (
    <div className="px-5">
      <div className="bg-white p-5 shadow-md shadow-purple-200/50 rounded-xl  flex">
        <div className="card w-72 bg-primary p-5 shadow-md shadow-purple-200/50 rounded-xl border-2 border-primary">
          <ul className="w-full flex flex-col gap-2">
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                href={"/admin/dashboard"}
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-white to-white focus:text-black text-gray-700 transition-all ease-linear"
              >
                <MdSpaceDashboard className="size-7" />
                Dashboard
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                href={"/admin/create"}
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-white to-white focus:text-black text-gray-700 transition-all ease-linear"
              >
                <CiCirclePlus className="size-7" />
                Create User
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                href={"/admin/booksManage"}
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-white to-white focus:text-black text-gray-700 transition-all ease-linear"
              >
                <ImBooks className="size-7" />
                Books
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <main className=" p-8 ">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-semibold text-gray-700">
                Welcome, Admin
              </h1>
            </header>
          </main>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
