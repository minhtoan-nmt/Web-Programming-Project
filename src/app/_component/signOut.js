'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOut() {
    const cookie = await cookies();
    cookie.set("token", "", {
        expires: Date.now() - 1,
    });
    redirect("/")
}