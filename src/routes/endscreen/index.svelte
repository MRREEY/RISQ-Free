<script>  
    import { goto } from "$app/navigation"

    let stopAppLink = "https://play.google.com/store/apps/details?id=nl.gemeenterotterdam.stopapp&hl=en&gl=US"
    let gemeenteRotterdam = "https://www.rotterdam.nl/wonen-leven/straatintimidatie/"
</script>
  
<main>
    <h1 class="green-b">Opzoek naar meer informatie?</h1>
    <p>Download de app</p>
    <button on:click={() => goto(stopAppLink)}>StopApp</button>
    <p>Of ga naar de website</p>
    <button on:click={() => goto(gemeenteRotterdam)}>Gemeente Rotterdam</button>
    <img src="/images/logos/logo 2.png" alt="Gemeente Rotterdam Logo">
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        height:100vh
    }

    img {
        max-width: 80%;
    }

    button {
        width: 150px;
        height: 50px;
        background-color: #00811f;
        color: white;
        font-size: large;
        font-weight: bold;
    }
</style>
  