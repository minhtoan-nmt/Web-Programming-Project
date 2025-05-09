import { redirect } from "next/navigation";

export async function getToken(e) {
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    // console.log(username, " ", password);
    const res = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "username" : username,
            "password" : password
        })
    });
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    console.log(data);
    const token = data.token;
    if (token===false) {
        alert("Đăng nhập thất bại");
        return;
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    setCookie("token", token, 1);
    redirect("/home");
    // if (data.data == false) {
    //     alert("Sai mật khẩu");
    // } else {
        
    // }
}