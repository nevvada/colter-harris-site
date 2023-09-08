import axios from 'axios';
import sendgrid from "@sendgrid/mail";

type RequestPayload = {
  gRecaptchaToken: string;
  formData: {
    email: string;
    message: string;
    name: string;
  };
};

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const PASSING_CAPTCHA_SCORE = 0.5;

const errorResponseBody = {
  status: 'error',
  message: 'Something went wrong, please try again!',
  code: 400,
};

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  return await axios.post(verificationUrl);
}

async function sendEmail(formData: RequestPayload['formData']) {
  const sendgridPayload = {
    to: 'colterfriend@gmail.com',
    from: 'noreply@colterharris.com',
    subject: `[${formData.name} has sent you a message via colterharris.com]`,
    html: `<h2>You've got incoming mail to colterharris.com from ${formData.name} at ${formData.email}</h2><div>${formData.message}</div>`,
  };

  await sendgrid.send(sendgridPayload);
}

export async function POST(request: Request) {
  try {
    const data: RequestPayload = await request.json();
    const token = data.gRecaptchaToken;
    const captchaResponse = await verifyRecaptcha(token);

    if (captchaResponse.data.success && captchaResponse.data.score >= PASSING_CAPTCHA_SCORE) {
      sendEmail(data.formData);

      return new Response('Success', { status: 200 })
    } else {
      return new Response(JSON.stringify(errorResponseBody), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify(errorResponseBody), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}