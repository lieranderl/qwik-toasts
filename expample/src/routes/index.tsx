import { component$, $, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ToastManagerContext, ToastStack } from "qwik-toasts";


export const showToasts = $((toastManager: any) => {
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
  toastManager.addToast({
    message: "Warning Message",
    type: "warning",
    autocloseTime: 8000,
  });
});

export type ShowBottomProps = {
  label: string
}
export const ShowButton = component$(({ label }: ShowBottomProps) => {
  const toastManager = useContext(ToastManagerContext);
  return (
    <button class="btn w-48" onClick$={() => showToasts(toastManager)}>{label}</button>
  );
})



export default component$(() => {
  return (
    <div class="flex flex-col gap-8 items-center mt-16">
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
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
