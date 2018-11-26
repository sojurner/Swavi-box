<template>
  <div class="Background__Container" :key="filmInfo.episode">
    <div class="Background__Fade" />
    <section class="Background__Scroll">
      <div class="Background__Crawl">
        <div class="Background__Title">
          <p>Episode {{filmInfo.episode}}</p>
          <h1>{{filmInfo.title}}</h1>
        </div>
        <p>{{filmInfo.openingCrawl}}</p>
        <p>{{filmInfo.releaseDate}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BackgroundScroll',
  data() {
    return {
      filmInfo: {
        episode: 'Vue',
        title: '<--Click On Films',
        openingCrawl: 'To view the Opening Crawl for a film',
        releaseDate: '2018-11-25 Paul Kim'
      }
    };
  },
  created() {
    this.$root.$on('filmCrawl', film => {
      this.filmInfo = film;
      console.log(this.filmInfo);
    });
  }
};
</script>

<style >
.Background__Container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -9999;
}

.Background__Fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  z-index: 1;
}

.Background__Scroll {
  display: flex;
  justify-content: center;
  position: relative;
  top: -20px;
  color: #feda4a;
  font-family: equinox;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 10px;
  line-height: 150%;
  height: 800px;
  perspective: 400px;
  text-align: justify;
}

.Background__Crawl {
  position: relative;
  top: 9999px;
  transform-origin: 50% 50%;
  animation: crawl 70s linear;
}

.Background__Crawl > .Background__Title {
  font-size: 90%;
  text-align: center;
}

.Background__Crawl > .Background__Title h1 {
  margin: 0 0 100px;
  text-transform: uppercase;
}

@keyframes crawl {
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -7000px;
    transform: rotateX(25deg) translateZ(-3000px);
  }
}
</style>