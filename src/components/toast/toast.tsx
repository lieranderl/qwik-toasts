import {
  component$,
  $,
  useContext,
  useSignal,
  useStyles$,
  useTask$,
} from "@builder.io/qwik";
import type { ToastBody, ToastStackProps } from "./toast-stack";
import { ToastManagerContext } from "./toast-stack";
import { ToastProgressBar } from "./progressbar";
import { ToastBodyComponent } from "./toast-body";
export type ToastType = "success" | "error" | "warning" | "info" | "default";
import styles from "./toast.css?inline";

export type ToastId = {
  id: string;
};

export type ToastProps = ToastBody & ToastId & ToastStackProps;

export const Toast = component$(
  ({ id, message, type, autocloseTime, horizontally, customIcon }: ToastProps) => {
    useStyles$(styles);
    const toastsFunc = useContext(ToastManagerContext);
    const baseClass = " drop-shadow-lg min-w-[300px] max-w-[430px]";
    const animClassIn = useSignal(baseClass);
    const animClassOut = useSignal(baseClass);
    const animClass = useSignal(animClassIn.value);

    useTask$(() => {
      const setAnimationClass = (inClass: string, outClass: string) => {
        animClassIn.value = inClass + baseClass;
        animClassOut.value = outClass + baseClass;
      };
      if (horizontally === "toast-center") {
        setAnimationClass("pop-in-center", "pop-out-center");
      } else if (horizontally === "toast-end") {
        setAnimationClass("slide-in-right", "slide-out-right");
      } else if (horizontally === "toast-start") {
        setAnimationClass("slide-in-left", "slide-out-left");
      }
      animClass.value = animClassIn.value;
    });

    const closeToast = $(() => {
      animClass.value = animClassOut.value;
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
      <div class={animClass.value}>
        <ToastBodyComponent
          message={message}
          type={type}
          autocloseTime={autocloseTime}
          closeToast={closeToast}
          customIcon={customIcon}
        />
        {autocloseTime && <ToastProgressBar progress={autocloseTime} />}
      </div>
    );
  },
);
