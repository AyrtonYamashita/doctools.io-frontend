type Props = React.ComponentProps<"span"> & {
  tag?: "success" | "error";
};

const variants = {
  success: "bg-green-200 text-green-700",
  error: "bg-red-200 text-red-900",
};

export function Tag({ tag = "error", children, ...rest }: Props) {
  return (
    <span
      className={`p-1 font-bold text-xxs rounded-2xl ${variants[tag]}`}
      {...rest}
    >
      {children}
    </span>
  );
}
