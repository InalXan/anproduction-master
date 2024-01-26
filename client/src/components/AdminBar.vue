<template>
  <div class="h-screen flex bg-second">
    <!-- container -->

    <aside class="flex flex-col items-center bg-light text-dark shadow h-full">
      <!-- Side Nav Bar-->

      <div class="h-16 flex items-center w-full">
        <!-- Logo Section -->
        <a class="h-6 w-6 mx-auto" href="/">
          <!-- <img
          class="h-6 w-6 mx-auto"
          src="/"
          alt="svelte logo" /> -->
          <h1 class="text-2xl text-center text-black text-success">L</h1>
        </a>
      </div>

      <ul>
        <!-- Items Section -->
        <li class="hover:bg-second">
          <RouterLink
            to="/admin/home"
            class="h-16 px-6 flex flex-center w-full focus:text-success"
          >
            <ion-icon name="home-outline"></ion-icon>
          </RouterLink>
        </li>

        <li class="hover:bg-second">
          <RouterLink
            to="/admin/inbox"
            class="h-16 px-6 flex flex-center w-full focus:text-success"
          >
            <ion-icon name="archive-outline"></ion-icon>
          </RouterLink>
        </li>

        <li class="hover:bg-second">
          <RouterLink
            to="/admin/show"
            class="h-16 px-6 flex flex-center w-full focus:text-success"
          >
            <ion-icon name="eye-outline"></ion-icon>
          </RouterLink>
        </li>

        <li class="hover:bg-second">
          <RouterLink
            to="/admin/category"
            class="h-16 px-6 flex flex-center w-full focus:text-success"
          >
            <ion-icon name="duplicate-outline"></ion-icon>
          </RouterLink>
        </li>

        <li class="hover:bg-second">
          <RouterLink
            to="/admin/product"
            class="h-16 px-6 flex flex-center w-full focus:text-success"
          >
            <ion-icon name="bag-add-outline"></ion-icon>
          </RouterLink>
        </li>
      </ul>

      <div class="mt-auto h-16 flex items-center w-full">
        <!-- Action Section -->
        <button
          class="h-16 w-12 mx-auto flex flex-center w-full focus:text-success hover:bg-danger hover:text-second focus:outline-none"
        >
          <svg
            class="h-5 w-5 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </aside>
  </div>
</template>
