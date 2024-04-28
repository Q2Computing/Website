import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/starter/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: "Q2-Computing",
  meta: [
    {
      name: "description",
      content: "Q2-Computing offers comprehensive, on-demand computational consulting support services to our clients.",
    },
  ],
};
