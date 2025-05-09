import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page() {
    const cookieStore = await cookies();
    if (cookieStore.get("token"))
        redirect("/home");
    // redirect("/auth/login");
}