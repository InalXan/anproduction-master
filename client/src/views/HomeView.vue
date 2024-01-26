<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const CategoryItems = ref([]);
    const ProductItems = ref([]);
    const TrendProducts = ref([]);

    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/category",
        );
        CategoryItems.value = response.data;
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products",
        );
        ProductItems.value = response.data;
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    const fetchTrendProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/trend-products",
        );
        TrendProducts.value = response.data;
      } catch (error) {
        console.error("Error fetching trend product data:", error);
      }
    };

    onMounted(() => {
      fetchCategoryData();
      fetchProductData();
      fetchTrendProducts();

      // Slider
      const slider = document.querySelector(".slider"); 
      setInterval(() => {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left, behavior: "smooth" });
        }
      }, 2000);
    });

    return {
      CategoryItems,
      ProductItems,
      TrendProducts,
    };
  },
};
</script>

<template>
  <!-- slide show start  -->
  <div class="flex flex-center">
    <div
      id="slide"
      class="h-4/5 slider shadow-xl m-1 w-5/6 overflow-hidden flex flex-nowrap text-center min-h-96 rounded-2xl"
    >
      <div
        style="
          background-image: url(https://images.pexels.com/photos/5846141/pexels-photo-5846141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
        class="bg-dark text-second space-y-4 flex-none w-full flex flex-col bg-center bg-100 items-center justify-center"
      >
        <h2 class="text-4xl font-bold max-w-md">
          Mebellərin və Metal Konstruksiyaların Hazırlanması
        </h2>
        <p class="max-w-md text-success"></p>
      </div>
      <div
        style="
          background-image: url(https://images.pexels.com/photos/19604921/pexels-photo-19604921/free-photo-of-modern-bedroom-with-wooden-panels.jpeg);background-position: center; background-size: 100%;
        "
        class="bg-success text-second bg-center bg-100 space-y-4 flex-none w-full flex flex-col items-center justify-center"
      >
        <h2 class="text-4xl font-bold max-w-md">Yumşaq Mebellər Hazırlayırıq</h2>
        <p class="max-w-md"></p>
      </div>
      <div
        style="
          background-image: url(https://images.unsplash.com/photo-1601565415267-724db0e9fbdf?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D); background-position: center; background-size: 100%;
        "
        class="bg-success text-second space-y-4 flex-none w-full flex flex-col items-center justify-center"
      >
        <h2 class="text-4xl font-bold max-w-md">Hər Dizaynda Məhsullar</h2>
        <p class="max-w-md">
          </p>
      </div>
    </div>
  </div>
  <!-- slide show end  -->
  <!-- new kategoriler start  -->
  <!-- header start  -->
  <div class="flex flex-y-center flex-x-left">
    <div class="flex-x-left mx-5 my-12">
      <h1 class="text-2xl">Yeni Kategoriyalar</h1>
    </div>

    <div class="w-1/2 flex flex-center w-100 h-1 bg-gray">
      <hr />
    </div>
  </div>
  <!-- header end  -->
  <div class="text-dark body-font bg-light flex justify-center">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap m-4 text-center">
        <div
          v-for="CategoryItem in CategoryItems"
          :key="CategoryItem"
          class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500"
        >
          <div
            class="flex items-center justify-between p-4 rounded-lg bg-second shadow-success hover:shadow-md"
          >
            <div>
              <h2 class="text-dark text-lg font-bold">
                {{ CategoryItem.name }}
              </h2>
              <h3 class="mt-2 text-xl font-bold text-success text-left">
                Category
              </h3>
              <router-link :to="'/categories/' + CategoryItem.name">
                <button
                  class="text-sm mt-6 px-4 py-2 bg-second border-2 border-success text-success rounded-lg tracking-wider hover:bg-success hover:text-second outline-none"
                >
                  Mehsullara Bax
                </button>
              </router-link>
            </div>
            <div class="w-32 h-32 flex justify-center items-center">
              <div>
                <h1 class="text-second text-2xl">
                  <img
                    class="w-32 h-32 rounded-full shadow-2xl shadow-success border-second border-dashed border-2"
                    :src="
                      'http://localhost:3000' +
                      CategoryItem.imageUrl
                    "
                    alt=""
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- popilar kategorier end  -->
  <br />
  <!-- newsletter start  -->
  <div class="flex flex-col justify-center items-center h-36 m-12">
    <div
      class="flex w-full flex-col bg-success rounded-md bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] max-w-100 xl:max-w-100 w-[95%]"
    >
      <div class="w-full">
        <h4
          class="mb-[14px] max-w-full text-xl font-bold text-second md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]"
        >
          Çeşidli Məhsullarımız və Xidmətlərimizdən Yararlanın
        </h4>
        <div
          class="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10"
        >
          <button
            class="text-success linear rounded-md bg-second px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-second/80 active:!bg-second/70"
          >
            Mehsullara Bax
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- newsletter end  -->
  <!-- trend  start -->
  <!-- header start  -->
  <div class="flex flex-y-center flex-x-left">
    <div class="flex-x-left mx-5 my-12">
      <h1 class="text-2xl">Yeni Məhsullar</h1>
    </div>

    <div class="w-1/2 flex flex-center w-100 h-1 bg-gray">
      <hr />
    </div>
  </div>
  <!-- header end  -->

  <br />
  <div
    v-for="product in ProductItems"
    :key="product.productId"
    class="inline-block px-3"
  >
    <div
      v-if="product.New === true"
      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <img
        class="relative w-100 h-64 h-cover"
        :src="`http://localhost:3000${product.imageUrl}`"
        alt=""
      />
    </div>
  </div>

  <!-- trend end  -->
  <!-- new start  -->
  <!-- header start  -->
  <div class="flex flex-y-center flex-x-left">
    <div class="flex-x-left mx-5 my-12">
      <h1 class="text-2xl">Trend Mehsullar</h1>
    </div>

    <div class="w-1/2 flex flex-center w-100 h-1 bg-gray">
      <hr />
    </div>
  </div>
  <!-- header end  -->
  <br />
  <!-- Ürünlerin Gösterildiği Alan -->
  <div class="flex flex-col bg-light m-auto p-auto">
    <div id="scroll" class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div id="force-flow" class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
        <!-- Ürünlerin Listesi -->
        <div
          v-for="product in TrendProducts"
          :key="product.productId"
          class="inline-block px-3"
        >
          <div
            v-if="product.trend === true"
            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              class="relative w-100 h-64 object-cover"
              :src="`http://localhost:3000${product.imageUrl}`"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- new end -->
  <!-- subscribe start  -->
  <!-- header start  -->
  <div class="flex flex-y-center flex-x-left">
    <div class="w-2/5 flex flex-center max-w-100 h-1 bg-gray">
      <hr />
    </div>
    <div class="flex-x-left mx-5 my-12">
      <h1 class="text-2xl">Niyə Biz?</h1>
    </div>
  </div>
  <!-- header end  -->
  <div
    class="w-100 2xl:mx-auto 2xl:container py-16 flex flex-center m-5 sm:flex-nowrap flex-wrap"
  >
    <div class="w-4/5 space-y-2">
      <div class="flex items-center flex-end max-w-100 h-auto">
        <img
          src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="shadow-box"
          alt=""
        />
      </div>
    </div>
    <div class="w-100 flex m-3 flex-center">
      <div class="space-y-2 grid place-items-center w-4/5">
        <div
          class="group flex flex-col sm:w-1/2 lg:w-4/5 gap-2 rounded-lg bg-light border-2 border-success p-5 text-success"
          tabindex="1"
        >
          <div class="flex cursor-pointer items-center justify-between">
            <span> Tam Zamanlı Xidmət </span>
            <img
              src="https://imgs.search.brave.com/u76c6z0N1rc9vAUynHj2LWulJ_WIwwM6nXweFlzdjDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9j/b21tZXJjZS1zaG9w/cGluZy9ldmFsdWF0/aW9uLWludGVyZmFj/ZS1vZi1zYW5mdS1v/ZmZpY2lhbC1tYWxs/L2ljb24tZHJvcGRv/d24ucG5n"
              class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div
            class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
          >
           Sifarişlərinizi Vaxtlı Vaxtında Hazır Edib Sizə Çatdırırıq.
          </div>
        </div>

        <div
          class="group flex flex-col gap-2 rounded-lg bg-light border-2 border-success sm:w-1/2 lg:w-4/5 p-5 text-success"
          tabindex="2"
        >
          <div class="flex cursor-pointer items-center justify-between">
            <span> Keyfiyyətli Material </span>
            <img
              src="https://imgs.search.brave.com/u76c6z0N1rc9vAUynHj2LWulJ_WIwwM6nXweFlzdjDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9j/b21tZXJjZS1zaG9w/cGluZy9ldmFsdWF0/aW9uLWludGVyZmFj/ZS1vZi1zYW5mdS1v/ZmZpY2lhbC1tYWxs/L2ljb24tZHJvcGRv/d24ucG5n"
              class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div
            class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
          >
           İstifadə Etdiyimiz Orjinal Premium Materiallarla Mebellərinizi Daha Keyfiyyətli Edirik.
          </div>
        </div>

        <div
          class="group sm:w-1/2 lg:w-4/5 flex flex-col gap-2 rounded-lg bg-light border-2 border-success p-5 text-success"
          tabindex="3"
        >
          <div class="flex cursor-pointer items-center justify-between">
            <span> Hər Zövqdə Hər Dizaynda Mebellər və Dəmir Konstruksiyalar </span>
            <img
              src="https://imgs.search.brave.com/u76c6z0N1rc9vAUynHj2LWulJ_WIwwM6nXweFlzdjDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9j/b21tZXJjZS1zaG9w/cGluZy9ldmFsdWF0/aW9uLWludGVyZmFj/ZS1vZi1zYW5mdS1v/ZmZpY2lhbC1tYWxs/L2ljb24tZHJvcGRv/d24ucG5n"
              class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div
            class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
          >Biz Sizin Fikrinizdə Canlandırdığınız Mebelləri və Dəmir Konstruksiyalar Təsvir Etdiyiniz Şəkildə Hazırlayırıq. 
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- subscribe end  -->
  <!-- sponsor company start  -->
  <div class="py-16 bg-white">
    <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
      <div class="m-auto text-center lg:w-7/12">
        <h2 class="text-2xl text-gray-700 font-bold md:text-4xl">Sponsor's</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
            class=""
            alt=""
          />
        </div>
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
            class="w-32"
            alt=""
          />
        </div>
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
            class="w-32"
            alt=""
          />
        </div>
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
            class="w-32"
            alt=""
          />
        </div>
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
            class="w-32"
            alt=""
          />
        </div>
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
            class="w-32"
            alt=""
          />
        </div>
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
            class="w-20"
            alt=""
          />
        </div>
        <div class="p-4">
          <img
            src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
            class="w-24"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <!-- sponsor company end  -->
</template>

<style lang="less">
@import "../assets/less/base";

@media (max-width: 699px) {
  #sponsor {
    font-size: 1.2rem;
  }
  .hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  }
}
</style>
