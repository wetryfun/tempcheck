import { Component, h } from "@stencil/core";
import { IconLogo } from '../../icons/logo';

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <IconLogo width='75%' height='75%' />
    );
  }
}
