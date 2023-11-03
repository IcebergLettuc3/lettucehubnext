// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  // const { body } = await req.json()
  // const {email, subject, message} = body;
  const {email, subject, message} = await req.json();
  console.log(email, subject, message)
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['jeisenbrandt1@gmail.com', email, fromEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),// EmailTemplate({ firstName: 'John' }),
    });
    console.log("route success")

    return NextResponse.json(data);
  } catch (error) {
    console.log("route error")
    return NextResponse.json({ error });
  }
}