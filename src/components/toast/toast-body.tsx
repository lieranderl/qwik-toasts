import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { ToastBody } from "./toast-stack";
import { getIconByType } from "./utils";
import { HiXMarkSolid } from "@qwikest/icons/heroicons";

export type ToastBodyComponentProps = {
  closeToast: QRL<() => void>;
} & ToastBody;

export const ToastBodyComponent = component$(
  ({
    message,
    type,
    closeToast,
    customIcon,
    messageClass,
  }: ToastBodyComponentProps) => {
    const messageDefaultClass = "mx-2 overflow-auto whitespace-normal text-sm ";
    const defaultClass = "flex items-center justify-between alert ";
    const getClassByType = (type: string) => {
      if (type === "info") return defaultClass + "alert-info";
      else if (type === "success") return defaultClass + "alert-success";
      else if (type === "warning") return defaultClass + "alert-warning";
      else if (type === "error") return defaultClass + "alert-error";
      else if (type === "default") return defaultClass;
    };

    const getMessageClass = () => {
      return messageDefaultClass + messageClass;
    };

    return (
      <div id="toast" class={getClassByType(type)} role="alert">
        <div class="flex items-center">
          {customIcon}
          {!customIcon && <div class="me-2 h-6 w-6">{getIconByType(type)}</div>}
          {message && <div class={getMessageClass()}>{message}</div>}
        </div>

        <button
          type="button"
          class="rounded-lg p-1 text-sm focus:outline-none focus:ring-0"
          aria-label="Close"
          onClick$={closeToast}
        >
          <HiXMarkSolid class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    );
  },
);
