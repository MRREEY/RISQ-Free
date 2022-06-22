<script>
    export let index;
    export let title;
    export let answers;
    export let alternativeScreen
    
    let showAlternativeScreen = false
</script>

<div class="statementScreen">
    <h1>{title}</h1>
    <img alt="cartoon storyboard" class="storyboard" src="/images/storyboards/{index}.png"/>
    {#if !showAlternativeScreen}
        {#each Object.entries(answers) as [answer], index }
            <button
                class="button"
                on:click
                class:green={index === 0}
                class:red={index === 1}
                >{answer}
            </button>
        {/each}
        <span on:click={ () => {showAlternativeScreen = !showAlternativeScreen}}>{alternativeScreen}</span>
    {:else}
        <input type="range" list="tickmarks" step="20">
        <datalist>
            {#each [0, 1, 2, 3, 4, 5] as value}
                {#if value == 0}
                    <option label="intimiderend" value="{value*1}"></option> 
                {:else if value == 5}
                    <option label="complimenterend" value="{value*1}"></option>
                {:else}
                    <option value="{value*1}"></option>
                {/if}
            {/each}
        </datalist>
        <button on:click >opslaan</button>
        <button on:click={ () => {showAlternativeScreen = !showAlternativeScreen}}>Terug</button>
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
    height:100vh
}

span {
    text-decoration: underline;
}


.green {
    color: #00811f;
    border-color: #00811f;
}

.red {
    color: #FF5C50;
    border-color: #FF5C50;
}
</style>
