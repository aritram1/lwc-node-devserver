/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement } from "lwc";

export default class App extends LightningElement {
  showTime = true;
  running = false;
  clockId;
  timeElapsed = 0;
  clockInfo = [
    {
      time: Date.now(),
      name: "Aritra"
    }
  ];
  //@track resetInfo={}
  processId = 0;

  constructor() {
    super();
    this.startClock();
  }

  resetClock(e) {
    this.stopClock();
    this.startClock();
  }

  stopClock(e) {
    clearInterval(this.clockId);
    this.timeElapsed = 0;
    this.running = false;
  }

  startClock(e) {
    this.clockInfo = []; //temp done
    this.clockInfo.push({
      time: Date.now(),
      name: "Aritra"
    });
    console.log(JSON.stringify(this.clockInfo));
    if (!this.running) {
      this.clockId = setInterval(() => {
        this.running = true;
        this.timeElapsed++;
      }, 1000);
    }

    //console.log('Current clock Id : ' + this.clockId);
  }
}
