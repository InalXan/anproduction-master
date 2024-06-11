<script setup>
import FurnitureSwiperComponent from '../components/FurnitureSwiper.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import WhatsappComponent from '../components/Whatsapp.vue'
import FurnitureComponent from '../components/Pages/Furniture.vue'
import FurnitureCategoryComponent from '../components/Pages/FurnitureCategory.vue'
import FooterComponent from '../components/Footer.vue'
</script>

<template>
  <NavigationMenu />
  <br /><br />
  <WhatsappComponent />
  <FurnitureSwiperComponent />

  <!-- start category components -->
  <FurnitureCategoryComponent />

  <div class="line_container">
    <div class="line">
      <div class="title">
        <h2>Ən Dəbdəbəli Mebellərə Sahib Olun</h2>
      </div>
      <div class="btn_content">
        <RouterLink to="/catalog"> Catalog </RouterLink>
      </div>
    </div>
  </div>
  <div class="page_header">
    <h2>Məhsullar</h2>
  </div>
  <!-- products  -->
  <FurnitureComponent />
  <FooterComponent />
</template>

<style lang="less">
@import '../assets/base';
.line_container {
  width: 100%;
  .flex-center();
  .line {
    display: flex;
    width: 100%;
    max-width: 1300px;
    flex-wrap: wrap;
    height: 20vh;
    border-radius: 10px;
    margin: 10px;
    background-image: url('../../public/panorama-furniture.jpg');
    .back-cover();
  }
}
.container_category {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
  grid-auto-rows: 200px;
  grid-gap: 20px;
  height: 100%;
  justify-content: center;
}

.card {
  height: 100%;
  max-height: 150px;
  margin: 20px;
  .flex-x-center();
  border: 1px solid @primary;
  background: #f2f2f2;
  border-radius: 5px;
  box-shadow: 4px 4px 8px -3px rgba(0, 0, 0, 0.15);
}

.avatar {
  .flex-center();
  padding: 15px 0 15px 15px;
}

.image {
  width: 120px;
  height: auto;
}
.page_header {
  width: 100%;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  margin: 2%;
}
.page_header h2:before {
  position: absolute;
  height: 5px;
  width: 5%;
  left: 0;
  bottom: -5px;
  background: @primary;
  display: block;
  content: '';
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
}
.title .btn_content {
  padding: 10px;
  margin: 10px;
}
.title {
  .flex-center();
  width: 100%;
  max-width: 600px;
  font-weight: 500;
  font-size: 1.2rem;
  color: @second;
  height: auto;
}

.btn_content {
  .flex-x-end();
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: auto;
  font-size: 0.8em;
  a{
    width: 100%;
    max-width: 160px;
    height: 50px;
    font-size: 1.2rem;
    border-radius: 10px;
    font-weight: bold;
    background: @transparent-dark;
    border: 1px solid @second;
    color: @second;
    text-align: center;
    padding: 10px;
    transition: .2s;
    &:hover{
      background: @second;
      color: @primary;
    }
  }
}

</style>
