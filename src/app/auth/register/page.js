'use client';

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

function Input(props) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${props.className || ""}`}
    />
  );
}

function Button({ children, className = '', ...props }) {
  return (
    <button type="submit"
      className={`px-4 py-2 rounded-md font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function RegisterPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left - Logo */}
      {/* <div className="w-full md:w-1/2 flex items-center justify-center bg-[#2B2D42] p-6"> */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#ffffff] p-6">
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="RCQ Logo"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-white">
        <div className="w-full max-w-[400px] md:max-w-[450px] bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Đăng ký tài khoản</h2>
          <p className="mb-4 text-gray-500">Nhập thông tin bên dưới</p>

          <form action={"http://localhost/api/user/register.php"} method="post" className="space-y-4">
            <Input name="last-name" placeholder="Họ" required/>
            <Input name="first-name" placeholder="Tên" required/>
            <Input name="citizen-id" placeholder="CCCD" required/>
            <Input name="dob" placeholder="Ngày tháng năm sinh" type="date" required/>
            <Input name="phone-num" placeholder="Số điện thoại" required/>
            <Input name="address" placeholder="Địa chỉ" />
            <Input name="username" placeholder="Tên tài khoản (dùng để đăng nhập)" required/>
            <Input name="password" placeholder="Mật khẩu" type="password" required/>
            <Input name="confirm-password" placeholder="Xác nhận mật khẩu" type="password" required/>

            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Đăng ký
            </Button>

            {/* <Button
              className="w-full flex items-center justify-center gap-2 border border-gray-300"
            >
              <FcGoogle size={20} />
              Đăng nhập bằng Google
            </Button> */}

            <p className="text-center text-sm mt-4">
              Bạn đã có tài khoản rồi?{' '}
              <a href="/auth/login" className="text-red-500 hover:underline">
                Đăng nhập
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
