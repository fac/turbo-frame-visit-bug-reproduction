import { Controller } from "@hotwired/stimulus"
import { visit } from "@hotwired/turbo"

export default class extends Controller {
  static values = { url: String }

  visit() {
    const frame = this.element.closest("turbo-frame")
    const url = this.urlValue
    debugger
    visit(url, { frame: frame.id, action: "advance" })
  }
}
