'use client';

import { UserTable } from "./Table";
import { useState, useEffect } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/user/get-all", {
          method: "GET",
          header: "Content-Type: application/json"
        });

        if (!response) {
          throw new Error("Failed to fetch all users data");
        }

        const responseData = await response.json();
        setUsers(responseData.data);
      } catch (e) {
        console.error("An error occurred while fetching users: ", e);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="m-4">
      <h1 className="text-2xl mb-6">Quản lý thông tin người dùng</h1>
      
      <UserTable items={users} />
    </div>
  );
}
