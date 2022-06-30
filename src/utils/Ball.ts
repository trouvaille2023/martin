import { getRandom } from "@/utils/util";

export class Ball {
  private readonly width: number;
  private readonly height: number;

  public r: number;
  private x: number;
  private y: number;

  private readonly fillStyle: string;

  public xSpeed: number;
  public ySpeed: number;

  constructor({
    width,
    height,
    speedK,
    r = 30,
    x,
    y,
    isStatic = false,
  }: {
    width: number;
    height: number;
    speedK: number;
    r: number;
    x: number;
    y: number;
    isStatic: boolean;
  }) {
    this.width = width;
    this.height = height;
    this.r = isStatic ? r : getRandom(r) + 10;
    this.x = isStatic ? x : getRandom(width - this.r * 2);
    this.y = isStatic ? y : getRandom(height - this.r * 2);
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
    if (kill) {
      this.r--;
    } else {
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      if (this.x >= this.width - this.r * 2 || this.x <= 0) {
        this.xSpeed = -this.xSpeed;
      }
      if (this.y >= this.height - this.r * 2 || this.y <= 0) {
        this.ySpeed = -this.ySpeed;
      }
    }
    return this;
  }
}
