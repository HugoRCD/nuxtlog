import { H3Event } from "h3";
import { addContactToList, sendEmail } from "~/server/service/resendService";

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    const { email } = body;
    const contact = await addContactToList(email);
    console.log(contact);
    return await sendEmail(email);
  } catch (error) {
    return {error};
  }
});
