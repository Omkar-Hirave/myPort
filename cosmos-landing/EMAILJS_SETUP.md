# EmailJS Setup Guide

This project uses EmailJS to send emails from the contact form. Follow these steps to configure it:

## Step 1: Install Dependencies

```bash
pnpm install
# or
npm install
```

This will install `@emailjs/browser` package.

## Step 2: Get Your EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in or create an account
3. Connect your email (inspiredomkar@gmail.com)

### Get Your Public Key
- Go to **Integration** > **API Keys**
- Copy your **Public Key**

### Get Your Service ID
- Go to **Email Services**
- You should see your connected email service
- Copy the **Service ID**

### Get Your Template ID
- Go to **Email Templates**
- Create a new template or use an existing one
- The template should have these variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{phone}}` - Sender's phone (optional)
  - `{{subject}}` - Email subject
  - `{{message}}` - Email message
- Copy the **Template ID**

## Step 3: Configure Environment Variables

Create a `.env` file in the root directory of your project:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholder values with your actual credentials from EmailJS.

## Step 4: Email Template Setup

In your EmailJS template, use these variables:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Body:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

## Step 5: Test the Contact Form

1. Start your development server: `pnpm dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email (inspiredomkar@gmail.com) for the message

## Troubleshooting

- **404 Error**: Make sure you've installed the `@emailjs/browser` package
- **Email not received**: Check your EmailJS dashboard for any errors
- **Configuration error**: Verify all three environment variables are set correctly
- **Template error**: Make sure your template uses the correct variable names

## Security Note

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Your Public Key is safe to expose in frontend code (it's designed for client-side use)

