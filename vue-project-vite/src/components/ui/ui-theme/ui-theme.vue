<!-- @format -->

<template>
	<div class="ui-theme" @click="changeTheme">
		<div class="theme-wrap">
			<div v-if="isLight" class="theme light">Light</div>
			<div v-else class="theme dark">Dark</div>
		</div>
	</div>
</template>

//
<script setup lang="ts">
import { onMounted, ref } from "vue";

const isLight = ref(true);
onMounted(() => {
	if (!isLight.value) {
		setTheme(isLight.value);
	}
});
const setTheme = (isLightTheme: boolean = true) => {
	document.documentElement.setAttribute("data-theme", isLightTheme ? "light" : "dark");
};
const changeTheme = () => {
	isLight.value = !isLight.value;
	setTheme(isLight.value);
};
</script>

<style lang="scss">
.ui-theme {
	background: var(--background-color-invert);
	color: var(--text-color-invert);
	border-radius: 5px;
	border: 1px solid #ccc;
	width: fit-content;
	cursor: pointer;

	.theme-wrap {
		padding: 10px;

		.theme {
			font-weight: 900;
			font-size: 0.8em;
		}
	}
}
</style>
