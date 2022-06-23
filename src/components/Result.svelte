<script>
    export let answers;
    export let index;

    import {spring, tweened} from 'svelte/motion';
    import Pie from './Pie.svelte';
    console.log(Object.entries(answers)[0][1]);
    let percent = Object.entries(answers)[0][1];
    //const store = tweened(0, {duration: 1000});
    const store = spring(0, {stiffness: 0.3, damping: 0.3});
    $: store.set(percent);
</script>

<div class="resultScreen">
    <section class="background"></section>
    <h1 class="title">Bedankt voor jullie antwoorden!</h1>
    <div class="content">
        <Pie size={200} percent={$store} />
        <h2>De meeste in Rotterdam vinden:</h2>
        <ul>
            {#each Object.entries(answers) as [answer, percentage], index }
                <li>
                    <span                  
                    class:green={index === 0}
                    class:red={index === 1}
                    >{percentage}% </span>
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

.green {
    color: #00811f;
    border-color: #00811f;
}

.red {
    color: #FF5C50;
    border-color: #FF5C50;
}

.resultScreen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-around;
    text-align: center;
    height:100vh
}

.background {
    height: 20vh;
}

ul {
    list-style-type: none;
    text-align: left;
    font-family: "Montserrat Bold";
    font-size: x-large;
}

h2 {
    font-family: "Montserrat Bold";
}

.volgendeButton {
    background-color: #00811f;
    color: white;
    border-radius: 4px;
    font-size: 27px;
    -ms-transform: translate(-50%, 50%);
    transform: translate(5%, 50%);
}

</style>
