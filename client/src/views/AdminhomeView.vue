<script setup>
  import AdminBar from "../components/AdminBar.vue"
  import AppBar from "../components/AppBar.vue"
</script>
<template>

<div class="flex">
<AdminBar class="sm:flex hidden" />
<div class="relative pt-5 bg-second">
<div class="container mx-auto">
  <div class="flex flex-wrap items-center">
    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-danger">
        <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg">
        <blockquote class="relative p-8 mb-4">
          <h4 class="text-xl font-bold text-second">
            Admin Panelin Istifadə Rəhbəri
          </h4>
          <p class="text-md font-light mt-2 text-second">
            Bu Səhifədə Admin Panelin Xüsusiyyətlərini Necə İstifadə Etməyi Öyrənəcəksiniz
          </p>
        </blockquote>
      </div>
    </div>

    <div class="w-full md:w-6/12 px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 px-4">
          <div class="relative flex flex-col shadow-lg mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-success p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-second">
                <ion-icon name="archive-outline"></ion-icon>
              </div>
              <h6 class="text-xl mb-1 font-semibold">İnbox</h6>
              <p class="mb-4 text-gray">
                Saytınızın Əlaqə Səhifəsindən yazılan bütün mesajlar bu səhifədə göstərilir.
              </p>
              <ul id="list">
                <li><span class="p-2 rounded-full text-center bg-success text-second"><ion-icon name="eye-outline"></ion-icon></span> Bu İşarəyə Basdıqda Mesaj Görülənlər Siyahısına Göndərilir</li>
                <li><span class="p-2 rounded-full text-center bg-danger text-second"><ion-icon name="trash-outline"></ion-icon></span> Mesajı Silmək İstəsəz Bu Düyməyə Basın</li>
             
              </ul>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 shadow-lg p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <ion-icon name="add-circle-outline"></ion-icon>
              </div>
              <h6 class="text-xl mb-1 font-semibold">
                Kateqoiya Əlavə Etmə  
              </h6>
              <p class="mb-4 text-gray">
                 Kategoriya Əlavə Etmə Səhifəsi Necə İstifadə Edilir?
              </p>
              <ul id="list">
                <li><span class="text-danger">Kategoriya Adı</span> Bölməsinə Kategoriyanın Adını Daxil Edirsiniz Və Əlavə Et Düyməsinə Basdıqda Üst Menyuya Kategoriya Əlavə Edilir</li>
                <li>Populyar Katogiriyalar Bölməsinə Əlavə Etmək İstədiktə İsə <span class="text-danger">Populyar</span> Düyməsinə Klikləyirsiniz ardından Şəkil Əlavə Edirsiniz</li>
             
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12  px-4">
          <div class="relative flex flex-col shadow-lg min-w-0 mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Görülən Mesajlar</h6>
              <p class="mb-4 text-gray">
                Görülənlər Qutusuna Əlavə Etdiyiniz Mesajları İdarə Etmə Səhifəsi
           

              </p>
              <ul id="list">
                <li><span class="p-2 rounded-full text-center bg-success text-second"><ion-icon name="eye-off-outline"></ion-icon></span> Bu İşarəyə Basdıqda Mesaj İnbox Səhifəsinə Geri Əlavə Edilir</li>
             
              </ul>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 shadow-lg flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-second">
               <ion-icon name="bag-add-outline"></ion-icon>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Malları Əlavə Et</h6>
              <p class="mb-4 text-gray">
                Mallar Necə Əlavə Edilir
              </p>
              <ul id="list">
                <li>
                       <span class="text-danger">Mal Adı</span> Bölməsinə Malın adını daxil edin</li>
                       <li><span class="text-danger">Mal Təsviri</span> Əlavə Etdiyiniz Malı Təsvir Edin</li>
                       <li><span class="text-danger">Trend</span> Qutusunu Klikləyərək Malı Əsas Səhifədə Trend Mallar Bölməsinə Əlavə Edə Bilərsiniz</li>
                       <li><span class="text-danger">Yeni</span> Qutusunu Klikləyərək Malı Əsas Səhifədə Yeni Mallar Bölməsinə Əlavə Edə Bilərsiniz</li>
                       <li><span class="text-danger">Kateqoriyalar</span> Bölməsindən Malı Əlavə Etmək İstədiyiniz Kateqoriyanı Seçin</li>
                       <li>Şəkil Əlavə Etdinkdən Sonrada Malı Əlavə Edin Düyməsinə Klikləyin</li>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

      <AppBar class="flex sm:hidden" />
</template>

<style lang="less">

ul#list {
  list-style-type: none;
}
ul#list > li {
  text-indent: -5px;
}
ul#list > li:before {
  content: "-";
  text-indent: -5px;
  font-size: 1.5rem;
}
</style>