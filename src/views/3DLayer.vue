<script setup lang="ts">
import IconFaceBookF from "@/components/icons/IconFaceBookF.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconYoutube from "@/components/icons/IconYoutube.vue";
</script>
<template>
  <div class="box">
    <div class="icons">
      <a href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fa"><n-icon :component="IconFaceBookF"></n-icon></span>
        </div>
        <div class="text">FaceBook</div>
      </a>
      <a href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fa"><n-icon :component="IconTwitter"></n-icon></span>
        </div>
        <div class="text">Twitter</div>
      </a>
      <a href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fa"><n-icon :component="IconInstagram"></n-icon></span>
        </div>
        <div class="text">Instagram</div>
      </a>
      <a href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fa"><n-icon :component="IconLinkedin"></n-icon></span>
        </div>
        <div class="text">Linkedin</div>
      </a>
      <a href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fa"><n-icon :component="IconYoutube"></n-icon></span>
        </div>
        <div class="text">YouTube</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: grid;
  width: 100vw;
  height: 100vh;
  place-items: center;
  background: #000;
  font-family: "Poppins", sans-serif;

  .icons {
    display: inline-flex;
  }

  .icons a {
    margin: 0 25px;
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }

  .icons a .layer {
    width: 55px;
    height: 55px;
    transition: transform 0.3s;
  }

  .icons a:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .icons a .layer span {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .icons a .layer span.fa {
    font-size: 30px;
    line-height: 55px;
    text-align: center;
  }

  .icons a .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    transition: bottom 0.3s ease, opacity 0.3s ease;
    transform: translateX(-50%);
  }

  .icons a:hover .text {
    bottom: -35px;
    opacity: 1;
  }
  .icons a:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }

  .icons a:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }

  .icons a:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }

  .icons a:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }

  .icons a:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .icons a:nth-child(1) span,
  .icons a:nth-child(1) .text {
    color: #4267b2;
    border-color: #4267b2;
  }

  .icons a:nth-child(2) span,
  .icons a:nth-child(2) .text {
    color: #1da1f2;
    border-color: #1da1f2;
  }

  .icons a:nth-child(3) span,
  .icons a:nth-child(3) .text {
    color: #e1306c;
    border-color: #e1306c;
  }

  .icons a:nth-child(4) span,
  .icons a:nth-child(4) .text {
    color: #2867b2;
    border-color: #2867b2;
  }

  .icons a:nth-child(5) span,
  .icons a:nth-child(5) .text {
    color: #ff0000;
    border-color: #ff0000;
  }

  .icons a:nth-child(1) span {
    box-shadow: -1px 1px 3px #4267b2;
  }

  .icons a:nth-child(2) span {
    box-shadow: -1px 1px 3px #1da1f2;
  }

  .icons a:nth-child(3) span {
    box-shadow: -1px 1px 3px #e1306c;
  }

  .icons a:nth-child(4) span {
    box-shadow: -1px 1px 3px #2867b2;
  }

  .icons a:nth-child(5) span {
    box-shadow: -1px 1px 3px #ff0000;
  }
}
</style>
