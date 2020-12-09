import { Component, VERSION } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Usermodel = new User("test@gmail.com", "password");
}
