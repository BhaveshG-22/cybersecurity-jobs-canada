import cx from "clsx";

export default function Container(props) {
  return (
    <div
      className={cx(
        "w-full max-w-screen-xl mx-auto px-5",
        props.className
      )}>
      {props.children}
    </div>
  );
}
