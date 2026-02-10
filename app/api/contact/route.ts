import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "0ffd8ede-6eaa-4811-b9d8-6c19af48a4cd";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, access_key: ACCESS_KEY }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
