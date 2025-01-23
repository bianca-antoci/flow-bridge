import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "flb-navigation",
  styleUrls: ["./navigation.component.scss"],
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent {
  menuItems = [
    {
      label: "Table View",
      icon: "assets/table.svg",
      path: "/table",
      selected: true,
    },
    {
      label: "Map View",
      icon: "assets/map.svg",
      path: "/map",
      selected: false,
    },
  ];

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavItemsSelection(event);
      }
    });
  }

  /**
   * Will update the 'selected' parameter in the navigation item
   *
   * @param event
   */
  private updateNavItemsSelection(event: NavigationEnd) {
    for (const item of this.menuItems) {
      item.selected = event.urlAfterRedirects.indexOf(item.path) > -1;
    }
  }
}
