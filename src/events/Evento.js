/* eslint-disable no-plusplus */
/*
 * @Author: zhangxuqiang
 * @Date: 2019-11-11 16:13:58
 * @Last Modified by: zhangxuqiang
 * @Last Modified time: 2020-10-19 17:36:44
 */

// eslint-disable-next-line import/prefer-default-export
export class Evento {
  constructor(obj) {
    let handlers = {};
    let state = {};
    obj.setEventState = (eventName, boo) => {
      state[eventName] = boo;
    };

    obj.getEventState = eventName => state[eventName] !== false;
    obj.on = (eventName, handler) => {
      (handlers[eventName] = handlers[eventName] || []);
      handlers[eventName].push(handler);

      return obj;
    };

    obj.getHandlers = eventName => (eventName ? handlers[eventName] : handlers);

    obj.clearHandlers = (eventName) => {
      if (eventName) {
        handlers[eventName] = {};
        delete state[eventName];
      } else {
        handlers = {};
        state = {};
      }
    };
    obj.once = (eventName, handler) => {
      function wrappedHandler() {
        // eslint-disable-next-line prefer-rest-params
        handler.apply(obj.off(eventName, wrappedHandler), arguments);
      }
      wrappedHandler.h = handler;
      return obj.on(eventName, wrappedHandler);
    };

    // remove a listener
    obj.off = (eventName, handler) => {
      for (let list = handlers[eventName], i = 0; handler && list && list[i]; i += 1) {
        if (list[i] !== handler && list[i].h !== handler) {
          // eslint-disable-next-line no-plusplus
          list.splice(i--, 1);
        }
      }

      if (!handler) {
        delete handlers[eventName];
        delete state[eventName];
      }
      return obj;
    };

    obj.emit = (eventName, ...arge) => {
      //
      // 先判断这个eventName的state，如果为false则不触发此数据
      //
      if (state[eventName] === false) { return obj; }
      //   if (data) {
      //     datas[eventName] = data;
      //   }
      for (let list = handlers[eventName], i = 0; list && list[i];) {
        // eslint-disable-next-line no-plusplus
        // list.slice.call(arguments, 2)
        // list.slice.call(arguments, 1);
        list[i++].apply(obj, [...arge]);
      }
      return obj;
    };
    return obj;
  }
}
