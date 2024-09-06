import db from "@/app/db/db";

export async function GET(req) {
    const [row] = await db.query('SELECT * FROM pedido')

    return new Response(JSON.stringify(row), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Expires': '0',
            'Pragma': 'no-cache'
        }
    })
}