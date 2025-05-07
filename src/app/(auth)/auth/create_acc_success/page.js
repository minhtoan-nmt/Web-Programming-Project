import Link from "next/link"

export default function CreateAccountSuccess() {
    return (
        <div className="p-10 block text-xl">
            <h1>Tạo tài khoản thành công! Vui lòng <Link href={"./login"}>đăng nhập</Link> </h1>
        </div>
    )
}