<script>
import Result from "/src/components/Result.svelte";
import Statement from "/src/components/Statement.svelte";
import { goto } from "$app/navigation"

const statements = [
		{
			title: 'Wat vinden jullie van deze opmerking?',
			alternativeScreen: "Geen keus kunnen maken?",
            alternativeScreenType: "slider",
			answers: {
                'complimenteren': 20, 'intimideren': 80,
            },
		},
        {
			title: 'Zouden jullie dit zeggen tegen de persoon die nu langs loopt?',
			alternativeScreen: "Deze scenario komt niet voor",
            alternativeScreenType: "nothing",
			answers: {
                'ja': 20, 'nee': 80,
            }
		},
		{
			title: 'Wat zouden jullie doen als een persoon het volgende zegt?',
			alternativeScreen: "Geen keus kunnen maken?",
            alternativeScreenType: "textfield",
			answers: {
                'helpen': 20, 'wegsturen': 80,
            }
		}
    ]

    let currentStatementIndex = 0
    let showResultScreen = false

    const toggleResultScreen = () => {
        showResultScreen = true
	};

    const nextStatement = () => {
        showResultScreen = false
		currentStatementIndex++;
	};

</script>

{#each statements as { title, alternativeScreen, answers, alternativeScreenType }, index }
    {#if index === currentStatementIndex}
        {#key currentStatementIndex}
            {#if !showResultScreen}
                <Statement {title} {index} {alternativeScreen} {answers} {alternativeScreenType} on:click={toggleResultScreen}/>
            {:else}
                <Result {index} {answers} on:click={nextStatement}/>
            {/if}
        {/key}
    {/if}
{/each}
{#if currentStatementIndex == statements.length}
    { goto("/endscreen")}
{/if}
