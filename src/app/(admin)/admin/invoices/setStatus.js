export async function setStatus(status, id, cartid) {
    const res = await fetch(`http://localhost:3000/api/set_status_invoice/${id}/${cartid}/${status}`);
    if (!res.ok) {
        console.log(res.status);
    }
    const result = res.json();
    return result;
}