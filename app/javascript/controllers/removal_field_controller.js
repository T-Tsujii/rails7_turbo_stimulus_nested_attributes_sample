import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { objectName: String }

  // 新規のフィールドは card を除去
  remove() {
    this.element.outerHTML = ''
  }

  // 既存のフィールドは accepts_nested_attributes_for の allow_destroy の効果が出るような input タグに置き換える
  replace() {
    this.element.outerHTML = `<input type="hidden" name="${this.objectNameValue}[_destroy]" value="1" autocomplete="off">`
  }
}
