<!-- src/components/LoaderSpinner.vue -->
<template>
    <div class="spinner-overlay" v-if="show">
      <div class="spinner" style="">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoaderSpinner',
    props: {
      show: {
        type: Boolean,
        required: true
      }
    }
  };
  </script>
  
  <style lang="less">

@import '../assets/base';
  .spinner-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
.spinner_image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
  
  .spinner {
    border: 8px solid @second;
    border-top: 8px solid @primary;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  