import { BasicUI } from './basicUI';
// import html2canvas from 'html2canvas';

// eslint-disable-next-line import/prefer-default-export
export class DemoUI extends BasicUI {
  constructor(elementId) {
    super(elementId);
    this.init();
  }

  init() {
    console.log('初始化demo');
 
  }

  addEvent() {
    this.$context.bind('click', () => {
      this.$context.text(`id：${this.elementId}——随机种子${Math.random()}`);
    });
  }
  convertToImage(container, options = {}) {
     // 设置放大倍数
    const scale = window.devicePixelRatio;

    // 传入节点原始宽高
    const _width = 300;
    const _height = 200;

    let { width, height } = options;
    width = width || _width;
    height = height || _height;

    // html2canvas配置项
    const ops = {
      scale,
      // width,
      // height,
      useCORS: true,
      allowTaint: false,
      ...options
    };
    
    // return html2canvas(container, ops).then(canvas => {
    //   // 返回图片的二进制数据
    //   return canvas.toDataURL("image/png");
    // });
  }
}
