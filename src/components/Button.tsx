type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  size?: string;
};

export function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`flex items-center justify-center bg-blue-500 rounded-lg text-white cursor-pointer hover:bg-blue-400 transition ease-linear disabled:opacity-50 disabled:cursor-progress h-12 disabled:hover:bg-blue-500`}
      {...rest}
    >
      {children}
    </button>
  );
}
