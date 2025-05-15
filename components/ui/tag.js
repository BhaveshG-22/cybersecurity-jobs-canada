import cx from "clsx";

export default function Tag({ size = "md", children }) {
  return (
    <span
      className={cx(
        " rounded-full bg-emerald-50 text-emerald-700",
        size === "sm"
          ? "px-3 py-px text-sm"
          : "px-5 py-1 text-sm  md:text-base"
      )}>
      {children}
    </span>
  );
}
