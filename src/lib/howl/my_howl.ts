interface Howl {
  link: string;
  method?: "get" | "post" | "delete" | "put" | "patch";
  content?:
    | "json"
    | "text"
    | "html"
    | "xml"
    | "form"
    | "multipart"
    | "javascript"
    | "css"
    | "png"
    | "jpeg"
    | "gif"
    | "pdf";
  data?: never;
  auth?: "bearer" | "basic" | "digest" | "apiKey" | "awsSignature" | "custom";
  token?: string;
  //
  mode?: "cors" | "no-cors" | "same-origin";
  cache?:
    | "default"
    | "no-store"
    | "reload"
    | "no-cache"
    | "force-cache"
    | "only-if-cached";
  credentials?: "omit" | "same-origin" | "include";
  redirect?: "follow" | "manual" | "error";
  reffererPolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  integrity?: string;
}

export default async function howl({
  link,
  method = "get",
  data,
  auth = "bearer",
  content = "json",
  token,
  mode = "cors",
  cache = "default",
  credentials = "same-origin",
  redirect = "follow",
  reffererPolicy = "strict-origin-when-cross-origin",
  integrity = "",
}: Howl) {
  console.log("Link: ", link);
  console.log("Method: ", method ? method?.toUpperCase() : "GET");
  console.log("Content-Type: ", options.type[content]);
  console.log(data);

  const call = await fetch(link, {
    method: method.toUpperCase(),
    mode: mode,
    cache: cache,
    credentials: credentials,
    redirect: redirect,
    referrerPolicy: reffererPolicy,
    integrity: integrity,
    headers: {
      "Content-Type": options.type?.[content],
      ...(token ? { Authorization: options.auth[auth] + " " + token } : {}),
    },
    body: content === "json" ? JSON.stringify(data) : data || null,
  });
  const res = await call.json();
  console.log(res);

  return res;
}

const options = {
  type: {
    json: "application/json",
    text: "text/plain",
    html: "text/html",
    xml: "application/xml",
    form: "application/x-www-form-urlencoded",
    multipart: "multipart/form-data",
    javascript: "application/javascript",
    css: "text/css",
    png: "image/png",
    jpeg: "image/jpeg",
    gif: "image/gif",
    pdf: "application/pdf",
  },
  auth: {
    bearer: "Bearer",
    basic: "Basic",
    digest: "Digest",
    apiKey: "Api-Key",
    awsSignature: "",
    custom: "CustomScheme",
  },
};
