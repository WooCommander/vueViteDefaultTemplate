<template>
  <div class="ui-button">
    <button @click="onClick">
      <slot>{{ text }}</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, onMounted, watch } from "vue";

// Определение пропсов компонента
const props = defineProps({

  text: { type: String, default: "Default name" },
});

// Определение эмиттеров событий компонента
const emits = defineEmits<{
  click: [], // Событие при клике на кнопку "Выход"
}>();
function onClick() {
  emits("click")
}

// // Отслеживание изменений пропса isCompact
// watch(
//   () => props.isCompact,
//   () => {
//     if (props.isCompact) {
//       console.log("Свойство isCompact поменялось на true");
//     }
//   }
// );

// const latitude = computed({
// get() {
// return lat.value || props.Latitude || 0;
// },
// set(newValue: number) {
// console.log(`newValue`, newValue);
// lat.value = newValue;
// },
// });
// // Блок переменных
// const count = ref(0); // Переменная для подсчета
// const message = ref(""); // Переменная для сообщения

// // Жизненный цикл компонента (при монтировании)
// onMounted(() => {
//   console.log("Компонент монтирован.");
// });

// // Вычисляемое свойство (двойное значение счетчика)
// const doubledCount = computed(() => count.value * 2);

// // Функция для увеличения счетчика
// function increment() {
//   count.value++;
// }

// // Функция для изменения сообщения и эмиттинга события обновления
// function changeMessage() {
//   message.value = "Новое сообщение!";
//   emits("update:message", message.value);
// }
</script>

<style lang="scss">
.ui-button {
  button {
    padding: 5px;
    border-radius: 8px;
    min-width: 80px;

    &:hover {
      background: var(--button-bg-hover);
    }
  }
}
</style>