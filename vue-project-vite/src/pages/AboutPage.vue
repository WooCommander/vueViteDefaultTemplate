<!-- @format -->

<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>
			<HelloWorld />
			<HelloWorld :msg="88" />
		</p>
	</div>
</template>
<script lang="ts" setup>
import Vue from "vue";
import { HelloWorld } from "@components";
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
