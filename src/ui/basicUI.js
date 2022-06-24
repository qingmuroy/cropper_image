/* global $ */
/*
 * @Author: zhangxuqiang
 * @Date: 2020-01-14 17:36:29
 * @Last Modified by: zhangxuqiang
 * @Last Modified time: 2020-10-19 18:15:45
 * UI基础类
 */

// eslint-disable-next-line import/prefer-default-export
export class BasicUI {
  constructor(elementId, app) {
    if (elementId) {
      this.elementId = elementId;
      this.setData = null;
      this.$context = $(`#${elementId}`);
    }
    if (app !== undefined) {
      BasicUI.app = app;
    }
    this.app = BasicUI.app;
  }

  /** 获取隐藏显示 */
  get visible() {
    if (this.$context.css('display') === 'none') {
      return false;
    }
    return true;
  }

  /**
   * 显示UI,添加事件
   */
  show() {
    if (!this.visible) {
      this.$context.show();
      this.addEvent();
    }
  }

  /**
   * 隐藏UI,移除事件
   */
  hide() {
    if (this.visible) {
      this.$context.hide();
      this.removeEvent();
    }
  }

  /**
   * 添加事件
   */
  addEvent() {

  }

  /**
   * 移除事件
   */
  removeEvent() {
  }

  /**
   * 重新绘画
   */
  resize() {

  }
}
