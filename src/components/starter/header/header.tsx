import { component$ } from "@builder.io/qwik";
import { q2logo } from "../icons/q2logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <>
      <header class={styles.header}>
        <div id="logo">Q2 Computing</div>
      </header>
    </>
  );
});
