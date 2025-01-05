"use client";
import AdminLyout from "@/components/madules/adminLyout/PAdmin";
import { User } from "@/type";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";

const page = () => {
  const [users, setUsers] = useState<User[] | undefined>([]);
  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/api/v1/admin/", {
      method: "GET", // یا 'POST' یا هر روش دیگری
      headers: {
        "Content-Type": "application/json", // در صورتی که محتوای JSON ارسال می‌کنید
      },
      credentials: "include",
    });
    const data = await res.json();
    setUsers(data.data);
  };
  const handelDeletUser = (user) => {
    swal({
      title:` ایا از حذف کاربر${user.username} مطمعنی کونی پاک کنی دیگه برنمیگرده ها`,
      icon: "warning",
      buttons: ["اره", "گوه خوردم"],
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <AdminLyout>
      <div className="bg-zinc scrooll m-5 rounded-lg shadow-2xl h-screen overflow-x-auto">
        <h1 className="p-4 text-center w-full">لیست کاربران</h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "#000",
                  color: "white",
                }}
              >
                شناسه
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "#000",
                  color: "white",
                }}
              >
                نام
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "#000",
                  color: "white",
                }}
              >
                ایمیل
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "#000",
                  color: "white",
                }}
              >
                نقش
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "#000",
                  color: "white",
                }}
              >
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id} style={{ textAlign: "center" }}>
                <td style={{ padding: "12px", border: "1px solid #000" }}>
                  {user._id}
                </td>
                <td style={{ padding: "12px", border: "1px solid #000" }}>
                  {user.username}
                </td>
                <td style={{ padding: "12px", border: "1px solid #000" }}>
                  {user.email}
                </td>
                <td style={{ padding: "12px", border: "1px solid #000" }}>
                  {user?.role}
                </td>
                <td style={{ padding: "12px", border: "1px solid #000" }}>
                  <button
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                    onClick={() => handelDeletUser(user)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLyout>
  );
};

export default page;
