import { component$, createContextId, Signal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import s from "./Speed.module.css";

import { ArrowDown } from "~/components/svg/arrowDown";
import { ArrowUp } from "~/components/svg/arrowUp";
import { Nav } from "~/components/nav/Nav";
import { Header } from "~/components/header/Header";

export default component$(() => {
  return (
    <>
      <Header subheading="Измерение скорости" />
      <div class={s.middle}>
        <div class={s.column}>
          <ArrowDown />
          <div class={s.text}>
            <h3 class={s.title}>
              Загрузка <span>Мбит/с</span>
            </h3>
            <div class={s.num}>889</div>
          </div>
        </div>
        <div class={s.column}>
          <ArrowUp />
          <div class={s.text}>
            <h3 class={s.title}>
              Отдача <span>Мбит/с</span>
            </h3>
            <div class={s.num}>432</div>
          </div>
        </div>
      </div>
      <Nav />
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
