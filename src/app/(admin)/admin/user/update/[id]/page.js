"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const [userData, setUserData] = useState([]);
  const resolveParams = React.use(params);
  const id = resolveParams.id;
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const titleInput = event.currentTarget.querySelector("#userTitle");
    const contentTextarea = event.currentTarget.querySelector("#content");
    const imgSrcInput = event.currentTarget.querySelector("#imgSrc");

    const title = titleInput ? titleInput.value : "";
    const content = contentTextarea ? contentTextarea.value : "";
    const imgSrc = imgSrcInput ? imgSrcInput.value : "";

    try {
      const data = {
        title: title,
        content: content,
        img_src: imgSrc,
      };
      console.log(data);

      const response = await fetch("/api/user/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(`Cập nhật người dùng ${id} thành công!`);
        router.push("/admin/user");
      } else {
        const errorData = await response.json();
        alert(`Lỗi: ${errorData.message || "Không thể cập nhật thông tin người dùng"}`);
      }
    } catch (e) {
      alert(`Lỗi: ${e.message || "Đã có lỗi xảy ra"}`);
      console.error("Error submitting comment:", e);
    }
  };

  useEffect(() => {
    const fetchInitData = async () => {
      const response = await fetch(`/api/user/get-with-id?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.code}`);
      }

      const responseData = await response.json();
      const userData = responseData.data;
      setUserData(userData);
    }

    fetchInitData();
  }, [id]);

  useEffect(() => {
    if (userData) {
      const firstNameInput = document.querySelector("#firstName");
      const lastNameInput = document.querySelector("#lastName");
      const citizenIdInput = document.querySelector("#citizenId");
      const phoneNumInput = document.querySelector("#phoneNum");
      const addressInput = document.querySelector("#address");
      const birthDateInput = document.querySelector("#birthDate");

      firstNameInput.value = userData.first_name;
      lastNameInput.value = userData.last_name;
      citizenIdInput.value = userData.citizen_id;
      phoneNumInput.value = userData.phone_num;
      addressInput.value = userData.address;
      birthDateInput.value = userData.birthDate;
    }
  }, [userData]);

  return (
    <div className="m-4">
      <h1 className="text-2xl mb-6">Cập nhật thông tin người dùng {id}</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="ml-2 font-bold mb-2">Tên</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />
        <label className="ml-2 font-bold mb-2">Họ và tên đệm</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />
        <label className="ml-2 font-bold mb-2">CCCD</label>
        <input
          type="text"
          id="citizenId"
          name="citizenId"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />
        <label className="ml-2 font-bold mb-2">SĐT</label>
        <input
          type="text"
          id="phoneNum"
          name="phoneNum"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />
        <label className="ml-2 font-bold mb-2">Địa chỉ</label>
        <input
          type="text"
          id="address"
          name="address"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />
        <label className="ml-2 font-bold mb-2">Ngày sinh</label>
        <input
          type="text"
          id="birthDate"
          name="birthDate"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />     

        <button
          type="submit"
          href="users/create"
          className="w-fit px-5 py-3 rounded-xl my-2 bg-[#435ebe] font-bold text-white hover:bg-blue-800"
        >
          Cập nhật thông tin
        </button>
      </form>
    </div>
  );
}