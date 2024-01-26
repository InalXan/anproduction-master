<template>
  <div class="flex flex-center w-full h-24 fixed bottom-0">
    <div class="max-w-1/2 bg-second p-6 border rounded-md">
      <ul class="flex flex-center">
        <li>
          <RouterLink to="/admin/home"
            ><ion-icon name="home-outline"></ion-icon
          ></RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/inbox"
            ><ion-icon name="archive-outline"></ion-icon
          ></RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/show"
            ><ion-icon name="eye-outline"></ion-icon
          ></RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/category"
            ><ion-icon name="apps-outline"></ion-icon
          ></RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/product"
            ><ion-icon name="add-circle-outline"></ion-icon
          ></RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
ul li {
  a {
    margin: 5px;
    padding: 11px;
    ion-icon {
      font-size: 1.5rem;
    }
  }
}
</style>
