import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async () => {
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );
    const { data, error } = await supabase.storage
      .from("github-transfer")
      .createSignedUrl("waygazer-source.tar.gz", 600);

    if (error || !data?.signedUrl) {
      return Response.json({ error: "Could not create transfer link" }, { status: 500 });
    }
    return Response.json({ url: data.signedUrl });
  } catch {
    return Response.json({ error: "Could not create transfer link" }, { status: 500 });
  }
});
