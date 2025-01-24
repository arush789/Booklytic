"use client";
import React, { useEffect, useRef, useState } from "react";
import AdminPage from "../page";
import { getUsers, updateUser } from "@/app/api/api";
import { UserManagementType } from "@/app/types";
import { useSession } from "next-auth/react";
import { Dialog, DialogContent, Skeleton } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const UserManagement = () => {
  const [users, setUsers] = useState<UserManagementType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserManagementType>();
  const [userRole, setUserRole] = useState(selectedUser?.role);
  const [menu, setMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const searchInputRef = useRef<string>("");
  const [searchTrigger, setSearchTrigger] = useState<boolean>(true);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const { data: session, status } = useSession();
  const isLoading = false;
  const [userEditModal, setUserEditModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers(selectedRole, searchInputRef.current);
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [selectedRole, searchTrigger]);

  console.log(selectedRole);

  const menuToggle = () => {
    setMenu(!menu);
  };

  const handleSearch = async () => {
    setSearchTrigger(!searchTrigger);
  };

  return (
    <AdminPage>
      <div className="p-6 lg:w-full sm:w-[500px] w-full">
        {loading ? (
          <div>
            <Skeleton height={60} />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              User Management
            </h1>
            <div className="relative md:flex justify-between py-5 ">
              <div className="flex items-center mb-2 md:mb-0">
                <input
                  placeholder="Search..."
                  className="input shadow-lg px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none text-black mr-2"
                  name="search"
                  type="search"
                  onChange={(e) => {
                    searchInputRef.current = e.target.value;
                  }}
                  onKeyDown={(e) => {
                    e.key === "Enter" && handleSearch();
                  }}
                />
                {searchInputRef.current !== "" ? (
                  <button
                    className="shadow-lg px-5 py-4 rounded-xl outline-none text-black bg-red-400"
                    onClick={() => {
                      searchInputRef.current = "";
                      handleSearch();
                    }}
                  >
                    <RxCross2 />
                  </button>
                ) : (
                  <button
                    className="shadow-lg px-5 py-4 rounded-xl outline-none text-black bg-white"
                    onClick={() => {
                      handleSearch();
                    }}
                  >
                    <CiSearch />
                  </button>
                )}
              </div>
              <div className="flex items-center">
                <button
                  className="shadow-lg px-5 py-3 w-full md:w-auto rounded-xl outline-none text-black bg-white mr-2"
                  onClick={menuToggle}
                >
                  {!selectedRole ? <h1>All</h1> : <h1>{selectedRole}</h1>}
                </button>

                <div
                  className={`absolute md:top-16 md:right-10 z-50 mt-2 md:w-52 w-64 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none transition ease-out duration-100 ${
                    menu
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="py-1 " role="none">
                    <div className=" overflow-auto scrollbar overflow-x-hidden">
                      <button
                        className="block px-4 py-2 text-sm text-black"
                        onClick={() => {
                          setSelectedRole("");
                          menuToggle();
                        }}
                      >
                        <p className="text-lg text-black text-left">All</p>
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-black"
                        onClick={() => {
                          setSelectedRole("admin");
                          menuToggle();
                        }}
                      >
                        <p className="text-lg text-black text-left">Admin</p>
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-black"
                        onClick={() => {
                          setSelectedRole("member");
                          menuToggle();
                        }}
                      >
                        <p className="text-lg text-black text-left">Member</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="table-auto w-full text-left border-collapse">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-sm font-semibold">ID</th>
                    <th className="px-6 py-3 text-sm font-semibold">Name</th>
                    <th className="px-6 py-3 text-sm font-semibold">Email</th>
                    <th className="px-6 py-3 text-sm font-semibold">Role</th>
                    <th className="px-6 py-3 text-sm font-semibold text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map(
                    (user, index) =>
                      user.email !== session?.user.email && (
                        <tr
                          key={user.id}
                          className={`border-t ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } hover:bg-gray-100`}
                        >
                          <td className="px-6 py-4 text-gray-800">{user.id}</td>
                          <td className="px-6 py-4 text-gray-800">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 text-gray-800">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 text-gray-800">
                            {user.role}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              className="text-blue-600 hover:underline hover:text-blue-800 transition"
                              onClick={() => {
                                setUserEditModal(true);
                                setSelectedUser(user);
                              }}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
            <Dialog
              open={userEditModal}
              onClose={() => setUserEditModal(false)}
              PaperProps={{
                sx: {
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  overflow: "hidden",
                },
              }}
            >
              <DialogContent>
                <div className="">
                  <div>
                    <h1>Name</h1>
                    <input
                      defaultValue={selectedUser?.name}
                      className="p-2 bg-gray-300  text-gray-500 rounded-xl mt-2"
                      disabled
                    />
                  </div>
                  <div className="">
                    <h1>Email</h1>
                    <input
                      defaultValue={selectedUser?.email}
                      className=" p-2 bg-gray-300 text-gray-500 rounded-xl mt-2"
                      disabled
                    />
                  </div>
                  <div className="mt-2 relative">
                    <h1>Role</h1>

                    <button
                      className="shadow-lg px-4 py-2 rounded-xl outline-none text-black bg-white mr-2 border "
                      onClick={menuToggle}
                    >
                      <h1 className="flex items-center gap-2">
                        {userRole ? userRole : selectedUser?.role}{" "}
                        <FaChevronDown />
                      </h1>
                    </button>
                    <div
                      className={`absolute bottom-12 z-50 mt-2 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none transition ease-out duration-100 ${
                        menu
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="py-1 " role="none">
                        <button
                          className="block px-4 py-2 text-sm text-black"
                          onClick={() => {
                            menuToggle();
                            setUserRole("member");
                          }}
                        >
                          <p className="text-lg text-black text-left">Member</p>
                        </button>

                        <button
                          className="block px-4 py-2 text-sm text-black"
                          onClick={() => {
                            menuToggle();
                            setUserRole("admin");
                          }}
                        >
                          <p className="text-lg text-black text-left">Admin</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button
                      className="bg-blue-500 p-2 mt-5 w-full  rounded-xl text-white"
                      onClick={() => {
                        if (selectedUser?.email) {
                          if (selectedUser?.email) {
                            updateUser(
                              selectedUser.email,
                              userRole || selectedUser.role
                            );
                          }
                        }
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </AdminPage>
  );
};

export default UserManagement;
