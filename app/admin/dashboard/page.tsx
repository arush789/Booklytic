import React from "react";
import AdminPage from "../page";

const DashboardPage = () => {
  return (
    <AdminPage>
      <div>
        <main className=" px-5 pt-5">
          <header className="flex justify-between items-center mb-1">
            <h1 className="text-3xl font-semibold text-gray-700">
              Welcome, Admin
            </h1>
          </header>
        </main>
      </div>
    </AdminPage>
  );
};

export default DashboardPage;
