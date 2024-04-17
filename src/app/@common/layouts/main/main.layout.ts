import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarSection } from "./sections/sidebar/sidebar.section";

@Component({
  standalone: true,
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.css',
  imports: [RouterOutlet, SidebarSection]
})
export class MainLayout {

}
