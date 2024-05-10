import { withZod } from "./middleware";

export const dynamic = "force-dynamic";

export const POST = withZod(async (request, data) => {
  console.log("Successfully received data", data);
  return new Response(
    JSON.stringify({
      data: {
        message: "You've successfully registered!",
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
});
