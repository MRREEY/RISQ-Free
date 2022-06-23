<script>
	export let index;
	export let title;
	export let answers;
	export let alternativeScreen;
	export let alternativeScreenType;

	const alternativeScreenTypes = ['slider', 'textfield', 'nothing'];

	let showAlternativeScreen = false;
</script>

<div class="statementScreen">
	<section class="background" />
	<h1 class="title">{title}</h1>
	<div class="content">
		<img alt="cartoon storyboard" class="storyboard" src="/images/storyboards/{index}.png" />
		{#if !showAlternativeScreen}
			{#each Object.entries(answers) as [answer], index}
				<button class="button" on:click class:green={index === 0} class:red={index === 1}
					>{answer}
				</button>
			{/each}
			{#if alternativeScreenType == 'nothing'}
				<span on:click>{alternativeScreen}</span>
			{:else}
				<span
					on:click={() => {
						showAlternativeScreen = !showAlternativeScreen;
					}}>{alternativeScreen}</span
				>
			{/if}
		{:else if alternativeScreenType == 'slider'}
			<div class="emojis">
				<img class="emoji" src="/images/logos/face-frown.png" alt="sad emoji" />
				<img class="emoji" src="/images/logos/face-smile.png" alt="happy emoji" />
			</div>
			<datalist id="steplist">
				{#each [0, 1, 2, 3, 4, 5] as value}
					{#if value == 0}
						<option label="intimiderend" value={value * 10} />
					{:else if value == 5}
						<option label="complimenterend" value={value * 10} />
					{:else}
						<option value={value * 10} />
					{/if}
				{/each}
			</datalist>
			<input type="range" class="slider" min="0" max="100" list="steplist" step="20" />
			<datalist id="steplist">
				{#each [0, 1, 2, 3, 4, 5] as value}
					<option value={value * 10}>|</option>
				{/each}
			</datalist>
			<button class="opslaanButton" on:click>opslaan</button>
			<span
				on:click={() => {
					showAlternativeScreen = !showAlternativeScreen;
				}}>Terug</span
			>
		{:else if alternativeScreenType == 'textfield'}
			<textarea name="feedback" id="feedback" cols="30" placeholder="Vul in..." rows="10" />
			<button on:click class="opslaanButton">opslaan</button>
			<span
				on:click={() => {
					showAlternativeScreen = !showAlternativeScreen;
				}}>Terug</span
			>
		{/if}
	</div>
	<p class="pagination">{index + 1}/3</p>
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

.content {
    align-items: initial;
}

#feedback {
    border: 5px solid #00811f;
    border-radius: 10px;
    padding: 10px;
    font-family: "Montserrat Bold";
    margin-bottom: 10px;
}

h1 {
    color: white;
}

.greenBox {
    position: absolute;
    background-color: #00811f;
    width: 391px;
    height: 323px;
    z-index: -1;
    top: 0;
}

.emojis {
    display: flex;
    justify-content: space-between;
}
.emoji {
    width: 30px;

}

datalist {
    display: flex;
    justify-content: space-between;
}

option {
    color: grey;
}

input {
    width: 50%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #00811f;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #00811f;
  cursor: pointer;
}

img {
    width: 100%;
    margin-bottom: 30px;
}

span {
    text-decoration: underline;
}

.green {
    text-transform: Uppercase;
    color: #00811f;
    border-color: #00811f;
}

.red {
    text-transform: Uppercase;
    color: #FF5C50;
    border-color: #FF5C50;
}

.opslaanButton {
    background-color: #00811f;
    color: white;
    border-radius: 4px;
    width: 40%;
    height: 50px;
    font-size: 20px;
    align-self: center;
    font-family: "Montserrat";
}

.background {
    height: 40vh;
}

.buttonsOT {
    background-color: #00811f;
    color: white;
    border-radius: 4px;
    font-size: 20px;
}

</style>
