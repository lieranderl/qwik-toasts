import type { QRL } from "@builder.io/qwik";
import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useStore,
  $,
  useSignal,
} from "@builder.io/qwik";
import type { ToastProps, ToastType } from "./toast";
import { Toast } from "./toast";
import { v4 as uuidv4 } from "uuid";

export const ToastManagerContext = createContextId<{
  addToast: QRL<(toast: ToastBody) => string>;
  removeToast: QRL<(id: string) => void>;
  removeAllToasts: QRL<() => void>;
  removeAllToastsByType: QRL<(type: ToastType) => void>;
}>("toastManagerContext");

export type ToastStackProps = {
  horizontally?: "toast-start" | "toast-center" | "toast-end";
  vertically?: "toast-top" | "toast-middle" | "toast-bottom";
};

export type ToastBody = {
  message: string;
  type: ToastType;
  autocloseTime?: number;
};

export const ToastStack = component$(
  ({ horizontally, vertically }: ToastStackProps) => {
    const toastsStore = useStore({ toasts: [] as ToastProps[] });
    const toastManager = useStore({
      addToast: $((toast: ToastBody) => {
        const ui = uuidv4();
        toastsStore.toasts.push({ ...toast, id: ui });
        return ui;
      }),
      removeToast: $((id: string) => {
        toastsStore.toasts = toastsStore.toasts.filter(
          (toast) => toast.id !== id,
        );
      }),
      removeAllToasts: $(() => {
        toastsStore.toasts = [];
      }),
      removeAllToastsByType: $((type: ToastType) => {
        toastsStore.toasts = toastsStore.toasts.filter(
          (toast) => toast.type !== type,
        );
      }),
    });

    const stackClass = useSignal(["toast", "z-[1000]"]);
    if (horizontally) stackClass.value.push(horizontally);
    if (vertically) stackClass.value.push(vertically);
    else stackClass.value.push("toast-bottom");

    useContextProvider(ToastManagerContext, toastManager);

    return (
      <>
        <div class={stackClass.value}>
          {toastsStore.toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              horizontally={horizontally ? horizontally : "toast-end"}
            />
          ))}
        </div>
        <Slot />
      </>
    );
  },
);
