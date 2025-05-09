export async function createInvoice(numOfItem, totalPrice) {
    const response = await fetch("http://localhost:3000/api/update_cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "Num_product": numOfItem,
            "Total_price": totalPrice,
        })
    })
    if (!response.ok) {
        console.log(response.status);
    }
    const result = await response.json();
    if (result) {
        return result;
    } else {
        alert("Fault");
    }
}