import { ExcelComponents } from "@core/ExcelComponent";

export class Toolbar extends ExcelComponents {
  static className = "excel__toolbar";

  constructor($root) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
    });
  }

  toHTML() {
    return `
    <div class="button">
    <i><div class="material-icons">format_align_left</div></i>
  </div>

  <div class="button">
    <i><div class="material-icons">format_align_right</div></i>
  </div>

  <div class="button">
    <i><div class="material-icons">format_align_center</div></i>
  </div>

  <div class="button">
    <i><div class="material-icons">format_bold</div></i>
  </div>

  <div class="button">
    <i><div class="material-icons">format_italic</div></i>
  </div>

  <div class="button">
    <i><div class="material-icons">format_underline</div></i>
  </div>`;
  }

  onClick(event) {
    console.log(event.target);
  }
}
