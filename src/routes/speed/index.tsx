import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Speed</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Скорость",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
