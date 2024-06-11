<script>
import LoaderSpinner from './components/LoaderSpinner.vue';

export default {
  name: 'App',
  components: {
    LoaderSpinner
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    window.addEventListener('load', this.hideSpinner);
  },
  methods: {
    hideSpinner() {
      this.loading = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener('load', this.hideSpinner);
  }
};
</script>

<template>
    <LoaderSpinner :show="loading" />
    <div v-if="!loading">
      <router-view />
    </div>
</template>
