<script>
  import { fly } from 'svelte/transition'
  import closable from '../closable.js'

  let button
  let show = false
</script>

<main>
  <button
    on:click="{ () => show = !show }"
    bind:this="{button}"
  >
    Show
  </button>

  {#if show}
    <div
      class="popup"
      transition:fly="{{
        duration: 200,
        y: 20
      }}"
      use:closable="{{ exclude: [button] }}"
      on:outside-click="{ () => show = false }"
    >
      <div class="inner">
        Popup
      </div>
    </div>
  {/if}
</main>

<style>
  main {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  button {
    background: hsl(260, 60%, 90%);
    color: hsl(260, 40%, 40%);
    padding: 20px 50px;
    font-size: 30px;
    font-weight: 600;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-out;
    box-shadow: 0 2px 5px hsla(260, 60%, 40%, 0.16), 0 2px 5px hsla(260, 60%, 40%, 0.23);
  }

  button:hover {
    background: hsl(260, 60%, 87%);
    box-shadow: none;
  }

  .popup {
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background: hsl(260, 60%, 60%);
    font-size: 20px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px hsla(260, 60%, 40%, 0.19), 0 6px 6px hsla(260, 60%, 40%, 0.23);
  }

  .inner {
    background: hsl(260, 60%, 65%);
    color: hsl(80, 100%, 90%);
    width: 70%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0 3px 6px hsla(260, 60%, 50%, 0.16), 0 3px 6px hsla(260, 60%, 50%, 0.23);
  }
</style>