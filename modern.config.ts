import { appTools, defineConfig } from "@modern-js/app-tools";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";
import { moduleFederationPlugin } from "@module-federation/modern-js";

export default defineConfig({
  source: { globalVars: { "process.env.API": process.env.API } },
  dev: {
    port: 3051,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack",
    }),
    moduleFederationPlugin(),
    tailwindcssPlugin(),
  ],
});
