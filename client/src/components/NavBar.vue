<template>
  <div>
    <nav class="hidden h-12 bg-dark text-light sm:flex">
      <div class="w-1/2 m-3 text-center">
        <h2>Bakı, Ağ Şəhər Urban Kafe</h2>
      </div>
      <div id="sponsor" class="w-1/2 flex flex-x-right">
        <div class="sponsor-item">
          <div class="flex flex-center h-full">
            <a class="flex flex-center h-full" href="https://www.instagram.com/azer_rustemov1/"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
        </div>
        <div class="sponsor-item">
          <div class="flex flex-center h-full">
            <a class="flex flex-center h-full" href="/"><ion-icon name="logo-facebook"></ion-icon></a>
          </div>
        </div>
        <div class="sponsor-item">
          <div class="flex flex-center h-full">
            <a class="flex flex-center h-full" href="tel:994557140385">
            <ion-icon name="logo-whatsapp"></ion-icon></a>
          </div>
        </div>
      </div>
    </nav>

    <div class="bg-second">
      <nav
        class="container shadow-sm px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <RouterLink
            to="/"
            class="text-xl font-bold text-dark md:text-2xl hover:text-success"
          >
            <!-- <img src="#" alt="" /> -->
            <h1 class="font-extrabold text-2xl text-success">Anproduction</h1>
          </RouterLink>
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="text-dark hover:text-success focus:outline-none focus:text-danger"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col font-bold mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-dark hover:text-success">
            <RouterLink to="/">Ana Səhifə</RouterLink>
          </li>
          <li class="text-dark hover:text-success">
            <RouterLink to="/about">Haqqımızda</RouterLink>
          </li>
          <li class="text-dark hover:text-success">
            <RouterLink to="/elaqe">Əlaqə</RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <nav class="w-100 shadow-sm font-semibold flex justify-around flex-row items-center">
      <nav id="category" class="overflow-x-scroll scroll-hidden">
        <ul class="flex">
          <li v-for="category in CategoryItems" :key="category.id" class="m-5">
            <RouterLink :to="'/categories/' + category.name" class="p-3 w-48">{{
              category.name
            }}</RouterLink>
          </li>
        </ul>
      </nav>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const CategoryItems = ref([]);
    const router = useRouter();

    const fetchCategoryData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/category");
        CategoryItems.value = response.data;
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    const toggleNav = ref(false);

    const redirectToCategory = (categoryName) => {
      router.push({ path: `/categories/${categoryName}` });
    };

    onMounted(() => {
      fetchCategoryData();
    });

    return {
      CategoryItems,
      redirectToCategory,
      toggleNav,
    };
  },
};
</script>

<style lang="less">
#sponsor .sponsor-item {
  margin: 10px;
}
#sponsor {
  font-size: 1.2rem;
}
#category {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#category::-webkit-scrollbar {
  display: none;
}

@media (max-width: 699px) {
}

@media (min-width: 1024px) {
  .top-navbar {
    display: inline-flex !important;
  }
}
</style>
