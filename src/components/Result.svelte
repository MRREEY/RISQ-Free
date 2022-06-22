<script>
    export let answers;
</script>

<h1>Bedankt voor jullie antwoorden!</h1>
<h2>De menigte vind deze stelling:</h2>
<ul>
    {#each Object.entries(answers) as [answer, percentage] }
        <li>{percentage} {answer}</li>
    {/each}
</ul>
<button on:click>Volgende</button>