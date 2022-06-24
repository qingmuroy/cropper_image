import { Http } from './http';
// eslint-disable-next-line import/prefer-default-export
export class Server extends Http {
  constructor(app) {
    super();
    this.gModel = {};
    // this.initGlobal();
    this.app = app;
    console.log('initServices');
    this.webPath = '/incopat4_war_exploded/';
    this.webPath = '/';
    // 获取左侧树 路径
    // this.GET_REPORT_TREE = `${this.webPath}advancedAnalysis/queryLeftInfo`;
  }

  // initGlobal() {
  //   const gkvs = Object.entries(window.GLOBAL.analysisReport);
  //   console.log(gkvs);
  //   for (let i = 0; i < gkvs.length; i += 1) {
  //     const key = gkvs[i][0];
  //     const value = gkvs[i][1];
  //     this.gModel[key] = value;
  //   }
  //   if (this.gModel.gotoType === '1') {
  //     this.currentSaveState = DBSTATE.FIRST_OPEN;
  //   } else {
  //     this.currentSaveState = DBSTATE.OPEN_SAVED;
  //   }
  //   Config.reportId = this.gModel.reportId;
  // }
  // getReportTree() {
  //   this.post(this.GET_REPORT_TREE, {
  //     gotoType: this.gModel.gotoType,
  //     reportId: this.gModel.reportId,
  //   }, (data) => {
  //     this.app.emit(EVENT.INIT_LEFT_REPORT_TREE, data.data);
  //   });
  // }
}
