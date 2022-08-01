<template>
  <!-- passando estilos como objeto -->
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BoxComponent",
  data() {
    return {
      // passando estilos como objeto
      // background-color e outras propriedades com hifen
      // tem 2 maneiras 'backgroundColor com CamelCase ou 'background-color' entre aspas'
      estilos: {
        background: "#faf0ca",
      },
    };
  },
});
</script>
