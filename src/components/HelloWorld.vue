<template>
  <div ref="lottieContainer" style="width:200px;height: 200px;"></div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/Animation1.json'; // 替换成您的Lottie JSON文件路径

export default {
  mounted() {
    this.lottie = lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  },
  beforeDestroy() {
    this.lottie.destroy();
  }
};
</script>
