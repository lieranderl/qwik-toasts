import type { JSXNode, JSXOutput, QRL } from "@builder.io/qwik";
import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useStore,
  $,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import type { ToastId, ToastType } from "./toast";
import { Toast } from "./toast";
import { v4 as uuidv4 } from "uuid";
import styles from "./toast.css?inline";

export const ToastManagerContext = createContextId<{
  addToast: QRL<(toast: ToastBody) => string>;
  modifyToast: QRL<(id: string, newToast: ToastBody) => void>;
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
  customIcon?: JSXNode<unknown> | JSXOutput;
  messageClass?: string;
};
export const ToastStack = component$(
  ({ horizontally, vertically }: ToastStackProps) => {
    useStyles$(styles);
    const toastsStore = useStore({ toasts: [] as (ToastBody & ToastId)[] });
    const toastManager = useStore({
      addToast: $((toast: ToastBody) => {
        const ui = uuidv4();
        toastsStore.toasts.push({ ...toast, id: ui });
        return ui;
      }),
      modifyToast: $((id: string, newToast: ToastBody) => {
        toastsStore.toasts = toastsStore.toasts.map((toast) => {
          if (toast.id === id) {
            return { ...newToast, id: id };
          } else return toast;
        });
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

    const stackClass = useSignal(["mtoast", "z-[1000]"]);
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
