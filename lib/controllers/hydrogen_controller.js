import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['text'];

  hello() {
    console.log('this was the old text', this.textTarget.innerText);
    this.textTarget.innerText = "Things change man.";
  }
}
