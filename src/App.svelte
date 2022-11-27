<script lang="ts">
  import { setContext } from 'svelte';
  import svelteLogo from './assets/svelte.svg';
  import { pb, user, type IAuth } from './stores/auth.store';

  setContext<IAuth>('auth', { pb, user });
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>PB Svelte</h1>

  <p>
    A starter template for
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">Svelte</a>
    that uses
    <a href="https://pocketbase.io" target="_blank" rel="noreferrer">
      PocketBase
    </a>
    as a backend.
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
