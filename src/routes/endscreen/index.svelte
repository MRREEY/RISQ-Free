<script>  
    import { goto } from "$app/navigation"

    let stopAppLink = "https://play.google.com/store/apps/details?id=nl.gemeenterotterdam.stopapp&hl=en&gl=US"
    let gemeenteRotterdam = "https://www.rotterdam.nl/wonen-leven/straatintimidatie/"
</script>
  
<main>
    <section class="background"></section>
    <h1 class="title">Opzoek naar meer informatie?</h1>
    <div class="content">
        <p>Download de app</p>
        <button on:click={() => goto(stopAppLink)}>StopApp</button>
        <p>Of ga naar de website</p>
        <button on:click={() => goto(gemeenteRotterdam)}>Gemeente Rotterdam</button>
    </div>
    <img src="/images/logos/logo 2.png" alt="Gemeente Rotterdam Logo">
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height:100vh
    }

    p {
        font-family: "Montserrat Bold";
        text-align: left;
        font-size: x-large;
        margin: 5px
    }

    .background {
        height: 25vh;
    }

    img {
        max-width: 80%;
    }

    button {
        width: 100;
        height: 100px;
        background-color: #00811f;
        color: white;
        font-size: large;
        font-weight: bold;
    }
</style>
  