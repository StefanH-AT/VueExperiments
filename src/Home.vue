<script>

</script>

<template>

<main>
  <h2>Overview</h2>
  <p>This is a collection of vuejs experiments and demos. Go check them out!</p>
  <ul>
    <li>
      <router-link to="/DemoSteppedPages">Stepped Pages</router-link>
    </li>
  </ul>
</main>

</template>

<style lang="scss" scoped>

main {
  margin-inline: auto;
  margin-top: 4rem;

  max-width: 32rem;

  padding: 2rem;

  background-color: var(--scheme-middleground);

  ul {
    list-style-type: decimal;
  }

  h2, a {
    color: var(--color-main);
  }

}

</style>