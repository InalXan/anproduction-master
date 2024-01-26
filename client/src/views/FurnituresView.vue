<template>
  <div class="mx-auto container px-6 xl:px-0 py-12">
    <div class="flex flex-col">
      <div class="flex flex-col justify-center">
        <div class="relative">
          <img
            class="hidden h-80 sm:block w-full"
            src="https://prod.gumlet.io/media/wysiwyg/MS_08818.jpg"
            alt="sofa"
          />
          <img
            class="sm:hidden h-80 w-full"
            src="https://prod.gumlet.io/media/wysiwyg/MS_08818.jpg"
            alt="sofa"
          />
          <div
            class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start"
          >
            <p class="sm:text-4xl font-semibold leading-9 text-dark">
              Məhsullar
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
        <div
          v-for="product in products"
          :key="product._id"
          class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center"
        >
          <img
            class="group-hover:opacity-60 transition duration-500"
            :src="`http://localhost:3000${product.imageUrl}`"
            :alt="product.name"
          />

          <div
            class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2"
          >
            <div>
              <p
                class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white"
              ></p>
            </div>
            <div>
              <p
                class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"
              >
                {{ product.name }}
              </p>
            </div>
          </div>
          <div
            class="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2"
          >
            <button
              class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"
            ></button>
            <button
              class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"
            ></button>
          </div>
          <div
            class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500"
          >
            <button>
              <svg
                class="dark:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Kalp ikonu SVG kodu buraya gelecek -->
              </svg>
            </button>
            <button>
              <svg
                class="dark:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Başka bir ikon SVG kodu buraya gelecek -->
              </svg>
            </button>
            <button>
              <svg
                class="dark:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Başka bir ikon SVG kodu buraya gelecek -->
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // Sayfa yüklendiğinde URL'den kategori adını al
    const categoryName = this.$route.params.categoryName;

    // Axios ile sadece belirli kategoriye ait mebelleri çek
    this.fetchProducts(categoryName);
  },
  methods: {
    async fetchProducts(categoryName) {
      try {
        // API endpoint'inizi ve diğer ayarları gerçek verilere göre güncelleyin
        const response = await axios.get(`http://localhost:3000/api/categories/${categoryName}/products`);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
};
</script>

<style>
/* Stil bilgileri buraya eklenmeli */
</style>
