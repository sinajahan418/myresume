import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "iphon-project-resume",
    short_name: "iphon Stor",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ffffff",
    orientation:"portrait-primary",
    icons: [
      {
        src: "/assets/images/apple.svg",

        sizes: "14x18",
        type: "image/png",
      }
    ],
  };
}
