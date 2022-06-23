<script>
	export let answers;
	export let index;
</script>

<div class="resultScreen">
	<section class="background" />
	<h1 class="title">Bedankt voor jullie antwoorden!</h1>
	<div class="content">
		<div class="whiteLayer" />
		<h2>De menigte vind deze stelling:</h2>
		<ul>
			{#each Object.entries(answers) as [answer, percentage]}
				<li>{percentage} {answer}</li>
			{/each}
		</ul>
		<button on:click class="volgendeButton">Volgende</button>
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

	.volgendeButton {
		background-color: #00811f;
		color: white;
		border-radius: 4px;
		font-size: 27px;
		-ms-transform: translate(-50%, 50%);
		transform: translate(5%, 50%);
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
</style>
