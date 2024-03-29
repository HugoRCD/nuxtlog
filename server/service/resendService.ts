import { Resend } from "resend";

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY);

// find your audience id here: https://resend.com/audiences
const nuxtLogAudienceId = "25b7e097-c3ee-4146-a451-5a9dcb15be04";

export async function sendEmail(email: string) {
    try {
        await resend.emails.send({
            from: "Hugo RCD <contact@hrcd.fr>",
            to: [email],
            subject: "Welcome to NuxtLog!",
            html: `
            <h1>Welcome to NuxtLog!</h1>
            <p>
                You've just subscribed to NuxtLog newsletter with this email: <strong>${email}</strong>.
            </p>
            <p>
                You can unsubscribe at any time by clicking on the link below the future emails you'll receive.
            </p>
            <p>
                See you soon!
            </p>
      `,
        });
    } catch (error) {
        console.error(error);
    }
}

export async function addContactToList(email: string) {
    return await resend.contacts.create({
        email,
        audienceId: nuxtLogAudienceId,
    })
}
