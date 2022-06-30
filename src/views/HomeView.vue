<script lang="ts" setup>
import {Ball} from "@/utils/Ball";
import {onBeforeUnmount, onMounted} from "vue";

const speedK = 1;
const ballCount = 10;
const ballArr: Ball[] = [];
let width: number = 0;
let height: number = 0;
let interVal: number = 0

/**
 *
 * @param context
 */
function createBallAndMove(context: CanvasRenderingContext2D): void {
  for (let i = 0; i < ballCount; i++) {
    const ball = new Ball({
      width,
      height,
      speedK,
      r: 30,
      x: 0,
      y: 0,
      isStatic: true,
    });
    if (i % 2 === 0) {
      ball.xSpeed = -ball.xSpeed;
    }
    if (i % 3 === 0) {
      ball.ySpeed = -ball.ySpeed;
    }
    context.beginPath();
    ball.drawBall({context});
    ballArr.push(ball);
  }
}

/**
 *
 * @param context
 */
const onMouseMoveCreateBall = (context: CanvasRenderingContext2D) => {
  window.onmousemove = function (event: MouseEvent) {
    const ball = new Ball({width, height, speedK: speedK, r: 30, x: event.x - 30, y: event.y - 30, isStatic: true});
    context.beginPath();
    ball.drawBall({context});
    ballArr.push(ball);
  };
};
onMounted(() => {

  const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#mainCanvas");
  width = document.body.clientWidth
  height = document.body.clientHeight
  canvas.width = width;
  canvas.height = height;
  const context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

  onMouseMoveCreateBall(context);

  interVal = setInterval(function () {
    context.clearRect(0, 0, width, height)

    for (let i = 0; i < ballArr.length; i++) {
      context.beginPath();
      const ball = ballArr[i];
      if (ball.r <= 0) {
        ballArr.splice(i, 1);
      } else {
        ball.drawBall({context}).run({kill: true});
      }
    }
  }, 10);
  onBeforeUnmount(() => {
    clearInterval(interVal)
  })
})

</script>

<template>
  <canvas class="main-canvas" id="mainCanvas"></canvas>
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
.main-canvas {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100vw;
  height: 100vh;
}

main {
  display: grid;
  justify-content: center;
  //align-items: center;
  grid-template-rows: 1fr 600px 1fr;
  width: 100vw;
  height: 100vh;
  //background-color: #000;
  //opacity: 0.2;

  .box {
    display: grid;
    grid-template-rows: repeat(auto-fill, 42px);
    grid-template-columns: repeat(5, 120px);
    grid-gap: 15px;
    justify-content: center;

    .item {
      border-radius: 21px;
      line-height: 42px;
      text-align: center;
      overflow: hidden;
      border: 1px solid #ffffee61;

      span {
        transition: all 0.3s ease-in-out;
        color: #ffffeefc;
        letter-spacing: 2px;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
      }

      &::before {
        content: "";
        background: var(--primary-color);
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        border-radius: 4px;

        top: 0;
        left: 0;
        //background: linear-gradient(
        //  22deg,
        //  #e91e63,
        //  #e91e63 50%,
        //  #ffc107 50%,
        //  #ffc107
        //);
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        //background: linear-gradient(
        //  157deg,
        //  #03a9f4,
        //  #03a9f4 50%,
        //  transparent 50%,
        //  transparent
        //);
      }

      &:hover {
        cursor: pointer;
      }

      &:hover span {
        font-size: 22px;
        font-weight: bolder;
        //backdrop-filter: blur(5px);
      }
    }
  }
}
</style>
