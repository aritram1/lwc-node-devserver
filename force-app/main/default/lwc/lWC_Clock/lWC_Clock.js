import { LightningElement } from "lwc";

export default class App extends LightningElement {
  showTime = true;
  timeElapsed = 0;
  resetInfo = [
    {
      time: Date.now(),
      name: "Aritra"
    }
  ];
  //@track resetInfo={}

  constructor() {
    super();
    setInterval(() => {
      this.timeElapsed = this.timeElapsed + 1;
      //console.log(`Time elapsed ${this.timeElapsed} seconds`);
    }, 1000);
  }

  resetClock(e) {
    this.timeElapsed = 0;
    this.resetInfo = []; //temp done
    this.resetInfo.push({
      time: Date.now(),
      name: "Aritra"
    });
    console.log(JSON.stringify(this.resetInfo));
  }

  stopClock(e) {
    //clearInterval();
  }

  startClock(e) {
    this.resetClock();
  }
}
