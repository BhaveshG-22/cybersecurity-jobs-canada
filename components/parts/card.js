import cx from "clsx";

export default function Card({ compact, children, active }) {
  return (
    <div
      className={cx(
        " transition border border-offgreen-medium rounded-xl hover:border-black hover:shadow-lg hover:shadow-offgreen-dark/20",
        compact ? "p-5 " : "p-5 md:p-8",
        active && "border-black shadow-lg shadow-offgreen-dark/20"
      )}>
      {children}
    </div>
  );
}
