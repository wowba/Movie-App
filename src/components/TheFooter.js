import { Component } from "../core/core";
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="${aboutStore.state.repository}">
          GitHub Repository.
        </a>
      </div>
      <div>
        <a href="${aboutStore.state.github}">
          ${new Date().getFullYear()}
          WOWBA
        </a>
      </div>
    `
  }
}