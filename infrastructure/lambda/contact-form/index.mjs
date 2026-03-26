import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({});

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(body),
});

const escapeHtml = (value = "") => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

export const handler = async (event) => {
  try {
    const payload = event?.body ? JSON.parse(event.body) : {};
    const name = String(payload.name ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const company = String(payload.company ?? "").trim();
    const message = String(payload.message ?? "").trim();

    if (!name || !email || !message) {
      return json(400, { error: "Name, email, and message are required." });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return json(400, { error: "Please enter a valid email address." });
    }

    await ses.send(new SendEmailCommand({
      FromEmailAddress: process.env.CONTACT_FROM_EMAIL,
      Destination: {
        ToAddresses: [process.env.CONTACT_TO_EMAIL],
      },
      ReplyToAddresses: [email],
      Content: {
        Simple: {
          Subject: {
            Data: `New ${process.env.CONTACT_SITE_NAME ?? "website"} contact form submission`,
          },
          Body: {
            Text: {
              Data: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Company: ${company || "N/A"}`,
                "",
                "Message:",
                message,
              ].join("\n"),
            },
            Html: {
              Data: `
                <h1>New ${escapeHtml(process.env.CONTACT_SITE_NAME ?? "website")} contact form submission</h1>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
              `,
            },
          },
        },
      },
    }));

    return json(200, { ok: true });
  } catch (error) {
    console.error("contact-form error", error);
    return json(500, { error: "Unable to send your message right now. Please try again later." });
  }
};
