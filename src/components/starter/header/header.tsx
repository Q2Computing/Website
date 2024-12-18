import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <>
      <header class={styles.header}>
        <div id="logo">Q2 Computing</div>
        <div id="button">Research</div>
      </header>
    </>
  );
});
