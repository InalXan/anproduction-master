<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Whatsapp from './components/Whatsapp.vue';
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

const isAdmin = ref(false);

function setMenuStatus() {
  const urlPath = window.location.pathname;
  const match = urlPath.match(/^\/[a-zA-Z]+/);

  if (!match) {
    isAdmin.value = false;
    return;
  }

  if (match[0] === '/admin') {
    isAdmin.value = true;
  }
}

onMounted(() => {
  setMenuStatus();
});
</script>
<template>
  <!-- header start  -->
  <header>
    <NavBar v-if="!isAdmin" />
  </header>
  <!-- header end  -->
  <div class="w-100 min-h-screen">
    <RouterView />
    <Whatsapp v-if="!isAdmin" />
  </div>
  <FooterBar v-if="!isAdmin" />
</template>
