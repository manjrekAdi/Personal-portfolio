import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD // This should be an App Password, not your regular Gmail password
  }
});

interface EmailData {
  name: string;
  email: string;
  subject?: string;  // Made optional to match the schema
  message: string;
}

export async function sendContactFormEmail(data: EmailData) {
  const { name, email, subject, message } = data;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'manjrekadi05@gmail.com', // Your email address
    subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully');
  } catch (error) {
    console.error('Error sending contact form email:', error);
    throw error;
  }
} 