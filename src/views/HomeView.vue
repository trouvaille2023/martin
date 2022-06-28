<script setup lang="ts"></script>

<template>
  <main>
    <div></div>
    <div class="box">
      <div class="item" @click="$router.push('/3dLayer')">
        <span>3DLayer</span>
      </div>
      <div class="item" @click="$router.push('/cssClock')">
        <span>CssClock</span>
      </div>
      <!--      <div class="item" @click="$router.push('')">3sdkfldksskdghgai</div>-->
      <!--      <div class="item" @click="$router.push('')">4sdkfldksskdghgai</div>-->
      <!--      <div class="item" @click="$router.push('')">5sdkfldksskdghgai</div>-->
      <!--      <div class="item" @click="$router.push('')">6sdkfldksskdghgai</div>-->
    </div>
  </main>
</template>
<style lang="scss">
main {
  display: grid;
  justify-content: center;
  //align-items: center;
  grid-template-rows: 1fr 600px 1fr;
  width: 100vw;
  height: 100vh;
  .box {
    display: grid;
    grid-template-rows: repeat(auto-fill, 52px);
    grid-template-columns: repeat(5, 120px);
    grid-gap: 20px;
    justify-content: center;

    .item {
      //background-color: #d79748;
      border-radius: 4px;
      line-height: 52px;
      text-align: center;
      span {
        transition: all 0.3s ease-in-out;
      }
      &:before {
        content: "";
        background: var(--primary-color);
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        border-radius: 4px;
      }
      &:hover {
        cursor: pointer;
      }
      &:hover span {
        font-size: 22px;
      }
    }
  }
}
</style>
