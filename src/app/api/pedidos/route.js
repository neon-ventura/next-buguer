import db from "@/app/db/db";

export async function POST(req) {
        const { usuario, mesa, burguer } = await req.json();
        console.log('Dados recebidos:', { usuario, mesa, burguer });

        const result = await db.query(
            'INSERT INTO pedido (usuario, mesa, burguer) VALUES (?, ?, ?)',
            [usuario, mesa, burguer]
        );

        return new Response(
            JSON.stringify({ message: "Pedido criado com sucesso", result}),
            {headers: { 'Content-Type': 'application/json' } }
        );
}
