export async function removeFromCart(id) {
    const res = await fetch(`http://localhost:3000/api/remove_item_from_cart/${id}`, {
        method: "POST",
    })
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    if (data) {
        alert("Removed from cart");
        window.location.reload();
    }
}