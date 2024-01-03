import { component$, useContext, $ } from "@builder.io/qwik";


import { ToastManagerContext, ToastStack } from "./components/toast/toast-stack";
import "./global.css";

export const Example = component$(() => {
  const toastManager = useContext(ToastManagerContext);

  const showToasts = $(() => {
    toastManager.addToast({
      message: "Test Message",
      type: "success",
    });
    toastManager.addToast({
      message: "Error Message",
      type: "error",
    });
    toastManager.addToast({
      message: "Info Message",
      type: "info",
      autocloseTime: 10000,
    });
  });

  return (
    <div>
      <div>Hello</div>
      <button class="btn btn-primary" onClick$={showToasts}>Show Toasts</button>
    </div>
  );
});

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <ToastStack>
          <Example />
        </ToastStack>
      </body>
    </>
  );
};
