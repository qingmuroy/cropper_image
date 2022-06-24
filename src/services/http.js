/* global $ */

// import { MessageTip } from '../layout/message/MessageTip';

// eslint-disable-next-line import/prefer-default-export
export class Http {
  constructor() {
    this.messages = new Map();
  }

  get(url, callback, async = true, directData = false) {
    $.ajax({
      type: 'get',
      async,
      url,
      directData,
      success(data) {
        if (data.status || directData) {
          if (callback) {
            callback(data);
          }
        } else {
          // MessageTip(data.messages);
        }
      },
      'Content-type': 'application/json',
      dataType: 'json',
    });
  }

  post(url, body, callback, async = true, isJson = false) {
    $.ajax({
      type: 'post',
      async,
      url,
      success(data) {
        if (data.status) {
          if (callback) {
            callback(data);
          }
        } else {
          // MessageTip(data.messages[0], 'warn');
          $('#loading').hide();
          if (callback) {
            callback(false);
          }
        }
      },
      data: isJson ? JSON.stringify(body) : body,
      dataType: 'json',
      contentType: isJson ? 'application/json;charset=utf-8' : 'application/x-www-form-urlencoded;charset=utf-8',
    });
  }

  // 原生请求
  post2(url, body, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.response);
      }
    };
    xhr.send(JSON.stringify(body));
  }
}
