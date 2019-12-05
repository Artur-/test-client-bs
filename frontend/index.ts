/******************************************************************************
 * This file is auto-generated by Vaadin.
 * If you want to customize the entry point, you can copy this file to `index.ts`
 * or create your own `index.ts` in your frontend directory.
 * By default, the `index.ts` file should be in `projectDirectory/frontend/index.ts`.
 *
 * NOTE:
 *     - You need to restart the dev-server after adding the new `index.ts` file.
 *       After that, all modifications to `index.ts` are recompiled automatically.
 *     - `index.js` is also supported if you don't want to use TypeScript.
 ******************************************************************************/

// import Flow module to enable traditional Vaadin server-side navigation
// If you prefer to use TypeScript, you can import `@vaadin/flow-frontend/Flow.ts` instead
import { Flow } from "@vaadin/flow-frontend/Flow.js";
import { Router } from "@vaadin/router";
const flow = new Flow({
  imports: () => import("../target/frontend/generated-flow-imports.js")
});

const serverSide = false;
if (serverSide) {
  flow.start();
} else {
  const routes = [
    // fallback to server-side Flow routes if no client-side routes match
    ...flow.serverSideRoutes
  ];

  const router = new Router(document.querySelector("#outlet"));
  router.setRoutes(routes);
}
