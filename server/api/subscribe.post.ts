import { H3Event } from "h3";
import { addContactToList, sendEmail } from "~/server/service/resendService";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const { email } = body;
  const contact = await addContactToList(email);
  if (contact.error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }
  await sendEmail(email);
  return {
    statusCode: 200,
    statusMessage: "OK",
  };
});
