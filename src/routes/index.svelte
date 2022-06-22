<script>  
  import { goto } from "$app/navigation"
</script>

<main class="green-b">
  <img src="/images/logos/logo 1.png" alt="Gemeente Rotterdam Logo">
  <button on:click={() => goto("/statements")}>Start</button>
  <p>Let op! Dit dient door minimaal 2 mensen beantwoord te worden.</p>
</main>

<style>

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-around;
    text-align: center;
    height:100vh
  }


  img {
    max-width: 80%;
  }

button {
    width: 150px;
    height: 50px;
    background-color: white;
    color: #00811f;
    font-size: large;
    font-weight: bold;
}
</style>
