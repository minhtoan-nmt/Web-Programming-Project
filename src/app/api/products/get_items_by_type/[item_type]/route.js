// export const dynamic = 'force-dynamic'
 
export async function GET(request, { params }) {
  // console.log(params);
  const { item_type } = await params;
  const res = await fetch(`http://localhost/clients_api/getItemsbytype.php?item_type=${item_type}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json();
 
  return Response.json({ data })
}

// ----- app/api/products/get_items_by_type/[item_type]/route.js -------
// import { NextResponse } from 'next/server';

// export const dynamic = 'force-dynamic';

// export async function GET(request, { params }) {
//   const { item_type } = await params;

//   const res = await fetch(
//     `http://localhost/clients_api/getItemsbytype.php?item_type=${item_type}`,
//     { headers: { 'Content-Type': 'application/json' } }
//   );

//   const data = await res.json();
//   return Response.json({ data });
// }
