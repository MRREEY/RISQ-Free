<script>
	export let index;
	export let title;
	export let answers;
	export let alternativeScreen;

	let showAlternativeScreen = false;
</script>

<div class="statementScreen">
	<div class="greenBox" />
	<h1>{title}</h1>
	<img alt="cartoon storyboard" class="storyboard" src="/images/storyboards/{index}.png" />
	{#if !showAlternativeScreen}
		{#each Object.entries(answers) as [answer], index}
			<button class="button" on:click class:green={index === 0} class:red={index === 1}
				>{answer}
			</button>
		{/each}
		<span
			on:click={() => {
				showAlternativeScreen = !showAlternativeScreen;
			}}>{alternativeScreen}</span
		>
	{:else}
		<input type="range" list="tickmarks" step="20" />
		<datalist>
			{#each [0, 1, 2, 3, 4, 5] as value}
				{#if value == 0}
					<option label="intimiderend" value={value * 1} />
				{:else if value == 5}
					<option label="complimenterend" value={value * 1} />
				{:else}
					<option value={value * 1} />
				{/if}
			{/each}
		</datalist>
		<button on:click class="opslaanButton">opslaan</button>
		<button
			on:click={() => {
				showAlternativeScreen = !showAlternativeScreen;
			}}
			class="terugButton">Terug</button
		>
	{/if}
</div>

<style>
	.statementScreen {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: space-around;
		text-align: center;
		height: 100vh;
	}

	h1 {
		color: white;
	}

	span {
		text-decoration: underline;
	}

	.greenBox {
		position: absolute;
		background-color: #00811f;
		width: 391px;
		height: 323px;
		z-index: -1;
		top: 0;
	}

	.green {
		color: #00811f;
		border-color: #00811f;
	}

	.red {
		color: #ff5c50;
		border-color: #ff5c50;
	}

	.opslaanButton {
		background-color: #00811f;
		color: white;
		border-radius: 4px;
		font-size: 27px;
	}

	.terugButton {
		background-color: #00811f;
		color: white;
		border-radius: 4px;
		font-size: 27px;
	}

	input[type='range'] {
		height: 34px;
		-webkit-appearance: none;
		margin: 10px 0;
		width: 100%;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 12px;
		cursor: pointer;
		box-shadow: 1px 1px 1px #002200;
		background: #205928;
		border-radius: 1px;
		border: 1px solid #18d501;
	}
	input[type='range']::-webkit-slider-thumb {
		box-shadow: 3px 3px 3px #00aa00;
		border: 2px solid #83e584;
		height: 23px;
		width: 23px;
		border-radius: 23px;
		background: #00811f;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -7px;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: #205928;
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 12px;
		cursor: pointer;
		box-shadow: 1px 1px 1px #002200;
		background: #205928;
		border-radius: 1px;
		border: 1px solid #18d501;
	}
	input[type='range']::-moz-range-thumb {
		box-shadow: 3px 3px 3px #00aa00;
		border: 2px solid #83e584;
		height: 23px;
		width: 23px;
		border-radius: 23px;
		background: #00811f;
		cursor: pointer;
	}
	input[type='range']::-ms-track {
		width: 100%;
		height: 12px;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	input[type='range']::-ms-fill-lower {
		background: #205928;
		border: 1px solid #18d501;
		border-radius: 2px;
		box-shadow: 1px 1px 1px #002200;
	}
	input[type='range']::-ms-fill-upper {
		background: #205928;
		border: 1px solid #18d501;
		border-radius: 2px;
		box-shadow: 1px 1px 1px #002200;
	}
	input[type='range']::-ms-thumb {
		margin-top: 1px;
		box-shadow: 3px 3px 3px #00aa00;
		border: 2px solid #83e584;
		height: 23px;
		width: 23px;
		border-radius: 23px;
		background: #00811f;
		cursor: pointer;
	}
	input[type='range']:focus::-ms-fill-lower {
		background: #205928;
	}
	input[type='range']:focus::-ms-fill-upper {
		background: #205928;
	}
</style>
