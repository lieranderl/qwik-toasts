import { component$, $, useContext, useSignal } from "@builder.io/qwik";
import type { ToastBody, ToastStackProps } from "./toast-stack";
import { ToastManagerContext } from "./toast-stack";
import { ToastProgressBar } from "./progressbar";
import { ToastBodyComponent } from "./toast-body";
export type ToastType = "success" | "error" | "warning" | "info" | "default";

export type ToastId = {
  id: string;
};

export type ToastProps = ToastBody & ToastId & ToastStackProps;

export const Toast = component$(
  ({
    id,
    message,
    type,
    autocloseTime,
    horizontally,
    customIcon,
    messageClass,
  }: ToastProps) => {
    const toastsFunc = useContext(ToastManagerContext);
    const baseClass = "relative drop-shadow-lg min-w-[300px] max-w-[430px]";
    const IsCloseSig = useSignal(false);
    const getAnimClass = (v: boolean) => {
      const animClassMap = {
        "toast-center": v ? "pop-out-center" : "pop-in-center",
        "toast-end": v ? "slide-out-right" : "slide-in-right",
        "toast-start": IsCloseSig.value ? "slide-out-left" : "slide-in-left",
      };
      if (horizontally) {
        return baseClass + " " + animClassMap[horizontally];
      }
      return baseClass;
    };

    const closeToast = $(() => {
      IsCloseSig.value = true;
      setTimeout(() => {
        toastsFunc.removeToast(id);
      }, 400);
    });

    // autoclose timeout
    if (autocloseTime && autocloseTime > 0) {
      setTimeout(() => {
        closeToast();
      }, autocloseTime);
    }

    return (
      <div class={getAnimClass(IsCloseSig.value)}>
        <ToastBodyComponent
          message={message}
          type={type}
          closeToast={closeToast}
          customIcon={customIcon}
          messageClass={messageClass}
        />
        {autocloseTime && <ToastProgressBar progress={autocloseTime} />}
      </div>
    );
  },
);
