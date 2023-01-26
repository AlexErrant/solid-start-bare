import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStatic from "solid-start-static"

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: solidStatic(),
    })
  ],
  ssr: {
    noExternal: ["ag-grid-solid"]
  }
});
