<!-- @format -->

<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>
			<HelloWorld />
			<UiButton @click="onClick">Ok</UiButton>
		</p>
	</div>
</template>
<script lang="ts" setup>

import { HelloWorld, UiButton } from "@components";
function onClick() {
	console.log("onCustomButton")
}
</script>
<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
