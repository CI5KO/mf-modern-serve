import "@modern-js/runtime/registry/main";
import { render } from "@modern-js/runtime/browser";
import { createRoot } from "@modern-js/runtime/react";
import { createBridgeComponent } from "@module-federation/bridge-react";

const ModernRoot = createRoot();
export const provider = createBridgeComponent({
  rootComponent: ModernRoot,
  render: (Component, dom) => render(Component, dom),
});

export default provider;
