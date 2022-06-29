import { getRandom } from "@/utils/util";

export class Ball {
  private readonly width: number;
  private readonly height: number;

  public r: number;
  private x: number;
  private y: number;

  private readonly fillStyle: string;

  private xSpeed: number;
  private ySpeed: number;

  constructor({
    width,
    height,
    speedK,
    r = 30,
  }: {
    width: number;
    height: number;
    speedK: number;
    r: number;
  }) {
    this.width = width;
    this.height = height;
    this.r = getRandom(r) + 10;
    this.x = getRandom(width - this.r * 2);
    this.y = getRandom(height - this.r * 2);
    this.fillStyle = `rgb(${getRandom(255)},${getRandom(255)},${getRandom(
      255
    )})`;
    this.xSpeed = getRandom(speedK) + speedK;
    this.ySpeed = getRandom(speedK) + speedK;
  }

  public drawBall({
    context,
    lineWidth = 3,
    startAngle = 0,
    endAngle = Math.PI * 2,
    anticlockwise = true,
  }: {
    context: CanvasRenderingContext2D;
    lineWidth?: number;
    startAngle?: number;
    endAngle?: number;
    anticlockwise?: boolean;
  }): Ball {
    context.lineWidth = lineWidth;
    context.fillStyle = this.fillStyle;
    context.arc(
      this.x + this.r,
      this.y + this.r,
      this.r,
      startAngle,
      endAngle,
      anticlockwise
    );
    context.fill();
    return this;
  }
  public run({ kill = false }: { kill?: boolean }): Ball {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x >= this.width - this.r * 2 || this.x <= 0) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y >= this.height - this.r * 2 || this.y <= 0) {
      this.ySpeed = -this.ySpeed;
    }

    if (kill) {
      this.r--;
    }
    return this;
  }
}
