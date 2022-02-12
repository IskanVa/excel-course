import { ExcelComponents } from "@core/ExcelComponent";

export class Header extends ExcelComponents {
  static className = "excel__header";

  toHTML() {
    return `
    <input type="text" class="input" value="Новая таблица" />

          <div>
            <div class="button">
              <i><div class="material-icons">delete</div></i>
            </div>

            <div class="button">
              <i><div class="material-icons">exit_to_app</div></i>
            </div>
          </div>
        </div>`;
  }
}
