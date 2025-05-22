import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "bucheed@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}