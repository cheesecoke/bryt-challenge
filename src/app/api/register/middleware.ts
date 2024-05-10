import {
    formDataSchema,
  formJsonSchema,
  type RegisterFormData,
  type RegisterFormJson,
} from "./schemas";
type Data = RegisterFormData | RegisterFormJson;


type PostHandler = (
  request: Request,
  data: Data
) => Promise<Response> | Response;

export function withZod(handler: PostHandler) {
  return async function (request: Request) {
    const contentType = request.headers.get("content-type");
    console.log("Content-Type", contentType);
    if (contentType?.includes("application/json")) {
      const data = await request.json();
      const result = await formJsonSchema.safeParseAsync(data);
      if (result.success) return handler(request, result.data);
      return new Response(JSON.stringify({ error: result.error.flatten() }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else if (contentType?.includes("multipart/form-data")) {
      const formData = await request.formData();
      const result = await formDataSchema.safeParseAsync(formData);
      if (result.success) return handler(request, result.data);
      console.log(result.error.flatten());
      return new Response(JSON.stringify({ error: result.error.flatten() }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new Response(
      JSON.stringify({ error: "Invalid Content-Type provided" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
}
