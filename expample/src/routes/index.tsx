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
      <div class="dropdown mb-30">
        <div tabIndex={0} role="button" class="btn m-1">
          Theme
          <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
        </div>
        <ul tabIndex={0} class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Coffee" value="coffee" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Business" value="business" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Lofi" value="lofi" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Autumn" value="autumn" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine" /></li>
          <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" /></li>
          
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
