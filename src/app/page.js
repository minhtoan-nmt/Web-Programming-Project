import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  // const cookieStore = await cookies();
  // if (cookieStore.get("token"))
  redirect("/home");
  // redirect("/auth/login");
}
