import { Logo } from "@/app/_component/Logo";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Trang đăng nhập/đăng ký",
  };
  
  export default async function AuthLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row min-h-screen">
          <Logo token={token}/>
          {children}
        </div>
      </main>
    );
  }