<!-- @format -->

<template>
	<div class="ui-lang" @click="changeTheme">
		<div class="lang-wrap">
			<div v-if="isRu" class="lang ru">RU</div>
			<div v-else class="lang en">EN</div>
		</div>
	</div>
</template>

//
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { setLocale } from "@/lang/locale.ts";

const isRu = ref(true);
onMounted(() => {
	if (!isRu.value) {
		setLocale(isRu.value ? "ru" : "en");
	}
});
const setTheme = (isLightTheme: boolean = true) => {};
const changeTheme = () => {
	isRu.value = !isRu.value;
	setLocale(isRu.value ? "ru" : "en");
};
</script>

<style lang="scss">
.ui-lang {
	background: var(--background-color-invert);
	color: var(--text-color-invert);
	border-radius: 5px;
	border: 1px solid #ccc;
	width: fit-content;
	cursor: pointer;

	.lang-wrap {
		padding: 10px;

		.lang {
			font-weight: 900;
			font-size: 0.8em;
		}
	}
}
</style>
