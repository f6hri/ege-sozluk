import { account } from "@/app/lib/appwrite";

export async function POST(request: Request) {
    const { email, password, name } = await request.json();

    try {
        const response = await account.create('unique()', email, password, name);
        return new Response(JSON.stringify(response), { status: 201 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
