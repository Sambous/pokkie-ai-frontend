import { NextResponse } from "next/server";

type CallRequestBody = {
  name?: string;
  business?: string;
  phone?: string;
};

export async function POST(request: Request) {
  let body: CallRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const business = body.business?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (!name || !business || !phone) {
    return NextResponse.json(
      { error: "Name, business, and phone are required." },
      { status: 400 },
    );
  }

  if (phone.replace(/\D/g, "").length < 8) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  const payload = {
    name,
    business,
    phone,
    receivedAt: new Date().toISOString(),
  };

  // Wire Resend later: set RESEND_API_KEY + NOTIFY_EMAIL
  if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "Pokkie <onboarding@resend.dev>",
          to: [process.env.NOTIFY_EMAIL],
          subject: `Call request: ${name} (${business})`,
          text: `New “Get a call from Pokkie” request\n\nName: ${name}\nBusiness: ${business}\nPhone: ${phone}\nTime: ${payload.receivedAt}`,
        }),
      });
    } catch (error) {
      console.error("Resend failed", error);
    }
  } else {
    console.log("[call-request]", payload);
  }

  return NextResponse.json({ ok: true });
}
