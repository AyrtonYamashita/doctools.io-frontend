type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, ...rest }: Props) {
  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      <input type="text" {...rest} />
    </fieldset>
  );
}
