<script>
import axios from 'axios'

export default {
  data() {
    return {
      images: []
    }
  },
  async created() {
    await this.fetchImages()
  },
  methods: {
    async fetchImages() {
      try {
        const response = await axios.get('http://localhost:5000/api/furnitures/images')
        this.images = response.data
      } catch (error) {
        console.error('Error fetching images', error)
      }
    }
  }
}
</script>
<template>
  <section class="gallery">
    <ul class="images" v-if="images.length">
      <li v-for="image in images" :key="image._id" class="img">
        <img :src="image.url" :alt="image.originalname" />
      </li>
    </ul>
  </section>
</template>

<style lang="less">
@import '../../assets/base';

/* Masonry image gallery styling */
.gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery .images {
  gap: 15px;
  max-width: 85%;
  margin: 40px 0;
  columns: 5 310px;
  list-style: none;
}
.gallery .images .img {
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-bottom: 14px;
  border-radius: 4px;
}
.gallery .images img {
  width: 100%;
  transition: transform 0.2s ease;
}
.gallery .images .img:hover img {
  transform: scale(1.1);
}
/* Image lightbox styling */
.lightbox {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.65);
}
.lightbox.show {
  visibility: visible;
}
.lightbox .wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  padding: 20px;
  max-width: 850px;
  background: #fff;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0.9);
  transition: transform 0.1s ease;
}
.lightbox.show .wrapper {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}
.wrapper :where(header, .details) {
  display: flex;
  align-items: center;
}
.wrapper header {
  justify-content: space-between;
}
header .details i {
  font-size: 1.7rem;
}
header .details span {
  font-size: 1.2rem;
  margin-left: 10px;
}
header .buttons i {
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: inline-block;
  color: #fff;
  margin-left: 10px;
  background: #6c757d;
  font-size: 1.25rem;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  transition: 0.2s ease;
}
header .buttons i:hover {
  background: #5f666d;
}
.wrapper .preview-img {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.preview-img .img {
  max-height: 65vh;
}
.preview-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Responsive media query code */
@media screen and (max-width: 688px) {
  .lightbox .wrapper {
    padding: 12px;
    max-width: calc(100% - 26px);
  }
  .wrapper .preview-img {
    margin-top: 15px;
  }
  .gallery .images {
    max-width: 100%;
    padding: 0 13px;
    margin-top: 20px;
  }
}
</style>
