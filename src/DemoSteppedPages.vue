<script>
import SteppedPages from "./components/SteppedPages.vue";

export default {
  components: {
    SteppedPages
  },
  data() {
    return {
      currentPageId: 0,
      page2Valid: false
    }
  },
  computed: {
    lastAllowedTab: (vm) => vm.page2Valid ? 2 : 1
  }
}
</script>

<template>
<main>
  <stepped-pages :tabs="['1: Step 1', '2: Step 2', '3: Step 3']" v-model:page="currentPageId" :lastAllowedTab="lastAllowedTab">

    <template #page0>
      <div class="progress-page">
        <h1>Page 1</h1>
        <p>This is a stepped page component.</p>
        <p>You can use the navigation at the top to click through the steps or use buttons in the pages to continue.</p>
        <button class="btn btn-accent" @click="currentPageId++">Next</button>
      </div>
    </template>

    <template #page1>
      <div class="progress-page">
        <h1>Page 2</h1>
        <p>This is the second page, woo!</p>

        <p>
          You can't progress further until you have fulfilled the page-specific requirements.
          In this case, you need to check a checkbox to continue.
        </p>

        <div class="pb-2 pt-1">
          <input type="checkbox" class="input-check" id="page2check" v-model="page2Valid">
          <label for="page2check">
            Check me!
          </label>
        </div>

        <button class="btn btn-accent" @click="currentPageId--">Back</button>
        <button :class="'btn btn-accent ' + (page2Valid ? '' : 'disabled')" @click="currentPageId++" :disabled="!page2Valid">Next</button>
      </div>
    </template>

    <template #page2>
      <div class="progress-page">
        <h1>Last Page</h1>
        <p>You're done!</p>
      </div>
    </template>

  </stepped-pages>
</main>
</template>

<style lang="scss" scoped>
main {
  height: 100%;
  max-width: 60rem;
  margin-inline: auto;
  margin-block: 2rem;
}

.progress-page {

  margin-top: 1rem;
  border-top: var(--border-width) solid var(--scheme-middleground);
  padding-block: 2rem;

  h1 {
    color: var(--color-accent);
    margin-bottom: 0.5rem;
  }

  .btn {
    font-size: 1.1em;
  }
}
</style>
