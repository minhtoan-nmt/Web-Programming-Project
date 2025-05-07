export const metadata = {
    title: "Trang đăng nhập/đăng ký",
  };
  
  export default function AuthLayout({ children }) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        {children}
      </main>
    );
  }