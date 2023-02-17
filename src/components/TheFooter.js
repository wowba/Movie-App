import { Component } from "../core/core";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/wowba?tab=repositories">
          GitHub Repository.
        </a>
      </div>
      <div>
        <a href="https://github.com/wowba">
          ${new Date().getFullYear()}
          WOWBA
        </a>
      </div>
    `
  }
}