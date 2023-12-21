
import mercadopage from "mercadopago";


import { NextResponse, type NextRequest } from 'next/server'


export const POST = async (request: NextRequest) => {
    const body = await request.json();
    mercadopage.configure({
        access_token: "TEST-5518417596884082-122022-e53404480cb7fd91b446facd7dd041e4-1602474619",
      });
      try {
        const result = await mercadopage.preferences.create(body);
        
    return NextResponse.json(result)
      } catch (error) {
        return NextResponse.json(error)
      }
}
