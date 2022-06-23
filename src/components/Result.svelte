<script>
	export let answers;
	export let index;

	import { spring, tweened } from 'svelte/motion';
	import Pie from './Pie.svelte';
	console.log(Object.entries(answers)[0][1]);
	let percent = Object.entries(answers)[0][1];
	//const store = tweened(0, {duration: 1000});
	const store = spring(0, { stiffness: 0.3, damping: 0.3 });
	$: store.set(percent);
</script>

<div class="resultScreen">
	<section class="background" />
	<h1 class="title">Bedankt voor jullie antwoorden!</h1>
	<div class="content">
		<div class="whiteLayer" />
		<Pie size={200} percent={$store} />
		<h2>De meeste in Rotterdam vinden:</h2>
		<ul>
			{#each Object.entries(answers) as [answer, percentage], index}
				<li>
					<span class:green={index === 0} class:red={index === 1}>{percentage}% </span>
					<span>{answer}</span>
				</li>
			{/each}
		</ul>
		<button on:click class="volgendeButton">Volgende </button>
	</div>
	<p class="pagination">{index + 1}/3</p>
</div>

<style>
	.resultScreen {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: space-around;
		text-align: center;
		height: 100vh;
	}

	h2 {
		font-family: 'Montserrat Bold';
		font-size: 26px;
		text-align: center;
	}

	.whiteLayer {
		position: absolute;
		background-color: white;
		z-index: -1;
		width: 100vw;
		height: 300px;
	}

	li {
		font-size: large;
	}

	.green {
		color: #00811f;
		border-color: #00811f;
	}

	.red {
		color: #ff5c50;
		border-color: #ff5c50;
	}

	.background {
		height: 20vh;
	}

	ul {
		list-style-type: none;
		text-align: left;
		font-family: 'Montserrat Bold';
		font-size: x-large;
	}

	.volgendeButton {
		font-family: 'Montserrat';
		background-color: #00811f;
		color: white;
		border-radius: 4px;
		width: 40%;
		height: 50px;
		font-size: 20px;
	}
</style>
