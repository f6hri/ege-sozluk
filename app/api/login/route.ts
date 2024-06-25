// app/api/login/route.js
import { account } from '@/app/lib/appwrite';

export async function POST(request: Request) {
    const { email, password } = await request.json();

    try {
        const response = await account.createEmailPasswordSession(email, password);
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
