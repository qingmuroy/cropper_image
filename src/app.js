/*
 * @Author: zhangxuqiang
 * @Date: 2020-10-19 18:08:23
 * @Last Modified by: zhangxuqiang
 * @Last Modified time: 2020-10-19 18:12:36
 * 程序入口
 */
import { Evento } from './events/Evento';
import { UI } from './ui/UI';
import { Server } from './services/server';
import { BasicUI } from './ui/basicUI';

// eslint-disable-next-line import/prefer-default-export
export class App {
  constructor() {
    this.init();
    this.initEvent();
    this.initServer();
    this.initUI();
  }

  init() {
    // 初始化基础库
    // eslint-disable-next-line no-new
    new BasicUI(null, this);
  }

  // 初始化UI
  initUI() {
    this.ui = new UI('main');
  }

  // 初始化http服务机制
  initServer() {
    this.server = new Server(this);
  }

  // 初始化事件推送机制
  initEvent() {
    this.event = new Evento(this);
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    this.ui.resize();
  }
}
