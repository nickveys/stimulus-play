import { Context, Controller } from 'stimulus';

export default class extends Controller {

  constructor(context: Context) {
    super(context);
    console.log("TestController()");
  }

  one() {
    console.log("TestController#one()");
  }

  two() {
    console.log("TestController#two()");
  }
}
