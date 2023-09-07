import axios from 'axios';

type RequestPayload = {
  gRecaptchaToken: string;
  formData: {
    email: string;
    message: string;
    name: string;
  };
};

const PASSING_CAPTCHA_SCORE = 0.5;

const errorResponseBody = {
  status: 'error',
  message: 'Something went wrong, please try again!',
  code: 400,
}

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  return await axios.post(verificationUrl);
}


export async function POST(request: Request) {
  try {
    const data: RequestPayload = await request.json();
    console.log('😬', data)
    const token = data.gRecaptchaToken;

    // Recaptcha response
    const captchaResponse = await verifyRecaptcha(token);

    if (captchaResponse.data.success && captchaResponse.data.score >= PASSING_CAPTCHA_SCORE) {
      // sendEmail(data.formData);
      console.log('success!!!');

      return new Response('hehe successs', { status: 200 })
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