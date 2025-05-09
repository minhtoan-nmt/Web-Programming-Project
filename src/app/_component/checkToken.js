import { redirect } from "next/navigation";

export function checkToken(token) {
    if (token) {
        redirect("/home");
    }
}