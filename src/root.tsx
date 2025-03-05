import { component$, useContext, $ } from "@builder.io/qwik";

import {
  ToastManagerContext,
  ToastStack,
} from "./components/toast/toast-stack";
import "./global.css";
import { HiBellAlertSolid, HiHandThumbUpSolid } from "@qwikest/icons/heroicons";

export const showToasts = $((toastManager: any) => {
  toastManager.addToast({
    message: "Test Default Message",
    type: "default",
  });
  toastManager.addToast({
    message: "Test Message",
    type: "success",
  });
  toastManager.addToast({
    message: "Test Custom Icon",
    type: "success",
    customIcon: <HiBellAlertSolid class="h-6 w-6" aria-hidden="true" />,
  });
  toastManager.addToast({
    message: "Test No Icon",
    type: "success",
    customIcon: <></>,
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
  toastManager.addToast({
    message: "Warning Message",
    type: "warning",
    autocloseTime: 8000,
  });
});

export type ShowBottomProps = {
  label: string;
};
export const ShowButton = component$(({ label }: ShowBottomProps) => {
  const toastManager = useContext(ToastManagerContext);
  return (
    <button type="button" class="btn w-48" onClick$={() => showToasts(toastManager)}>
      {label}
    </button>
  );
});

export const AddRemoveProg = component$(() => {
  const toastManager = useContext(ToastManagerContext);
  const fakePromise = $(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 5000);
    });
  });

  const addToasts = $(async () => {
    const promiseId = await toastManager.addToast({
      message: "Pending Promise",
      type: "warning",
      customIcon: <span class="loading loading-sm" />,
    });
    fakePromise().then((res) => {
      toastManager.modifyToast(promiseId, {
        message: res!.toString(),
        type: "default",
        messageClass: "text-neutral font-bold",
        customIcon: <HiHandThumbUpSolid class="text-2xl" />,
      });
    });
    toastManager.addToast({
      message: "Test Message",
      type: "success",
    });
    toastManager.addToast({
      message: "Test Custom Icon",
      type: "success",
      customIcon: <HiBellAlertSolid class="h-6 w-6" aria-hidden="true" />,
    });
    toastManager.addToast({
      message: "Error Message 1",
      type: "error",
    });
    toastManager.addToast({
      message: "Error Message 2",
      type: "error",
    });
    toastManager.addToast({
      message: "Info Message",
      type: "info",
      autocloseTime: 10000,
    });
    toastManager.addToast({
      message: "Warning Message",
      type: "warning",
      autocloseTime: 8000,
    });
  });

  return (
    <div class="flex flex-col gap-2">
      <button type="button" class="btn w-48" onClick$={addToasts}>
        Add Toasts
      </button>
      <button
        type="button"
        class="btn btn-error w-48"
        onClick$={() => {
          toastManager.removeAllToastsByType("error");
        }}
      >
        Delete Only Errors
      </button>
      <button
        type="button"
        class="btn btn-error w-48"
        onClick$={() => {
          toastManager.removeAllToasts();
        }}
      >
        Delete All Toasts
      </button>
    </div>
  );
});

export const Example = component$(() => {
  return (
    <div class="mt-16 flex flex-col items-center gap-8">
      <div class="mb-30 dropdown">
        <div tabIndex={0} role="button" class="btn m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            class="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          class="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
              aria-label="Default"
              value="default"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
              aria-label="Light"
              value="light"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
              aria-label="Dark"
              value="dark"
            />
          </li>
        </ul>
      </div>
      <div class="flex gap-2">
        <ToastStack horizontally={"toast-start"} vertically={"toast-top"}>
          <ShowButton label="Show Top Start" />
        </ToastStack>
        <ToastStack horizontally={"toast-center"} vertically={"toast-top"}>
          <ShowButton label="Show Top Center" />
        </ToastStack>
        <ToastStack horizontally={"toast-end"} vertically={"toast-top"}>
          <ShowButton label="Show Top End" />
        </ToastStack>
      </div>

      <div class="flex gap-2">
        <ToastStack horizontally={"toast-start"} vertically={"toast-middle"}>
          <ShowButton label="Show Middle Start" />
        </ToastStack>
        <ToastStack horizontally={"toast-center"} vertically={"toast-middle"}>
          <ShowButton label="Show Middle Center" />
        </ToastStack>
        <ToastStack horizontally={"toast-end"} vertically={"toast-middle"}>
          <ShowButton label="Show Middle End" />
        </ToastStack>
      </div>

      <div class="flex gap-2">
        <ToastStack horizontally={"toast-start"}>
          <ShowButton label="Show Bottom Start" />
        </ToastStack>
        <ToastStack horizontally={"toast-center"}>
          <ShowButton label="Show Bottom Center" />
        </ToastStack>
        <ToastStack>
          <ShowButton label="Show Bottom End" />
        </ToastStack>
      </div>

      <h1 class="mt-20">Delete toasts using script:</h1>
      <ToastStack>
        <AddRemoveProg />
      </ToastStack>
    </div>
  );
});

export default () => {
  return (
    <>
      <head>
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Example />
      </body>
    </>
  );
};
