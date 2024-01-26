<template>
  <section class="text-dark body-font relative">
    <div class="absolute inset-0 bg-second">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style=""
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-second rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-dark text-lg mb-1 font-medium title-font">Əlaqə</h2>
        <p class="leading-relaxed mb-5 text-dark">
          Bu Səhifə Üzərindən Sifarişlərinizi və Çatdırmaq İstədiyiniz Mesajlarınızı Göndərə Bilərsiniz
        </p>
        <div class="relative mb-4">
          <label for="adSoyad" class="leading-7 text-sm text-dark">Ad Soyad</label>
          <input
            type="text"
            id="adSoyad"
            name="adSoyad"
            ref="adSoyad"
            class="w-full bg-light rounded border border-gray-300 focus:border-success focus:ring-2 focus:ring-success text-base outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>    
        <div class="relative mb-4">
          <label for="mobilNomre" class="leading-7 text-sm text-dark">Mobil Nomre</label>
          <input
            type="text"
            id="mobilNomre"
            name="mobilNomre"
            ref="mobilNomre"
            class="w-full bg-light rounded border border-gray-300 focus:border-success focus:ring-2 focus:ring-success text-base outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="tesvir" class="leading-7 text-sm text-gray-600">Mesaj</label>
          <textarea
            id="tesvir"
            name="tesvir"
            ref="tesvir"
            class="w-full bg-second rounded border border-success focus:border-success focus:ring-2 focus:ring-success h-32 text-base outline-none text-dark py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-second bg-success border-0 py-2 px-6 focus:outline-none hover:bg-success rounded text-lg"
          @click="submitOrder"
        >
          Gonder
        </button>
        <p class="text-xs text-dark mt-3">
          Bütün Xanaları Doldurun
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    submitOrder() {
      const adSoyad = this.$refs.adSoyad.value;
      const mobilNomre = this.$refs.mobilNomre.value;
      const tesvir = this.$refs.tesvir.value;

      const postData = {
        adSoyad: adSoyad,
        mobilNomre: mobilNomre,
        tesvir: tesvir,
      };

      axios.post('http://localhost:3000/submit-order', postData)
        .then(response => {
          // Handle the response if needed
          console.log(response.data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error submitting order:', error);
        });
    },
  },
};
</script>
