import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { Speed } from "~/components/svg/speed";
import { Map } from "~/components/svg/map";
import { Geodata } from "~/components/svg/geodata";

import s from "./Nav.module.css";

export const Nav = component$(() => {
  return (
    <nav class={s.nav}>
      <Link href="/speed" class={[s.link, s.active]} data-type="speed">
        <div class={s.bg}></div>
        <div class={s.content}>
          <Speed />
          Скорость
        </div>
      </Link>

      <Link href="/map" class={s.link} data-type="map">
        <div class={s.bg}></div>
        <div class={s.content}>
          <Map />
          Карта
        </div>
      </Link>

      <Link href="/geodata" class={s.link} data-type="geodata">
        <div class={s.bg}></div>
        <div class={s.content}>
          <Geodata />
          Геоданные
        </div>
      </Link>
    </nav>
  );
});
