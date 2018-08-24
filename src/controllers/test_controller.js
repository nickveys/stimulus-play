import { Controller } from 'stimulus';

export default class extends Controller {

  constructor() {
    super();
    console.log("Constructed");
  }

  one() {
    console.log("One clicked");
  }

  two() {
    console.log("Two clicked");
  }
}
