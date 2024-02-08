import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../../media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <p id="automation"></p>
      <p>consulting@q2computing.com</p>
    </div>
  );
});
