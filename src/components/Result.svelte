<script>
    export let answers;
    export let index;
</script>

<div class="resultScreen">
    <section class="background"></section>
    <h1 class="title">Bedankt voor jullie antwoorden!</h1>
    <div class="content">
        <h2>De menigte vind deze stelling:</h2>
        <ul>
            {#each Object.entries(answers) as [answer, percentage] }
                <li>{percentage} {answer}</li>
            {/each}
        </ul>
        <button on:click>Volgende</button>
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
    height:100vh
}

h2 {
    font-family: "Montserrat Bold";
}
</style>