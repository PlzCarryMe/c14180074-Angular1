import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public items: any[][];

  constructor() {
    this.items = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
  }

  tampil: boolean = false;
  a = 0;
  baris = null;
  kolom = null;

  win1 = 0;
  win2 = 0;

  GO() {
    if (this.baris != null && this.kolom != null) {
      if (
        this.baris >= 0 &&
        this.baris <= 4 &&
        this.kolom >= 0 &&
        this.kolom <= 4
      ) {
        if (this.a == 0 && this.items[this.baris][this.kolom] == "*") {
          this.items[this.baris][this.kolom] = this.a;
          this.a = 1;
        } else if (this.a == 1 && this.items[this.baris][this.kolom] == "*") {
          this.items[this.baris][this.kolom] = this.a;
          this.a = 0;
        }
      }
    }
  }

  reset() {
    this.items = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
    this.a = 0;
  }
}
