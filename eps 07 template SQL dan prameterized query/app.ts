import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./rute.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("service bejalan di port 8000");
await app.listen({ port: 8000 });