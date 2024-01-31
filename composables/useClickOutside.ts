export async function useClickOutside(
  el_target_ref: Ref<Element> | null,
  on_click_outside: () => void,
  callback_condition?: () => boolean
) {
  if (!el_target_ref) return;
  if (!el_target_ref.value) {
    console.log(
      "useClickOutside",
      "target element was not supplied or is null"
    );
    return;
  }

  let dont_use_first_click = 0;
  const listener = async (e: MouseEvent) => {
    let enable_click_outside = true;
    if (typeof callback_condition === "function") {
      enable_click_outside = callback_condition();
    }
    if (!enable_click_outside) return;
    if (dont_use_first_click === 0) {
      dont_use_first_click++;
      return;
    }
    if (
      e.target === el_target_ref.value ||
      e.composedPath().includes(el_target_ref.value)
    ) {
      return;
    }

    if (enable_click_outside && typeof on_click_outside === "function") {
      on_click_outside();
    }
  };

  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });
  return {
    listener,
  };
}
