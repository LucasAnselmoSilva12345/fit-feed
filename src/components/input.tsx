import { forwardRef, ComponentProps } from 'react';

type InputRootProps = ComponentProps<'div'>;
export const InputRoot = forwardRef<HTMLDivElement, InputRootProps>(
  function InputRoot(props, ref) {
    return <div ref={ref} className="flex flex-col gap-2" {...props} />;
  }
);

type InputLabelProps = ComponentProps<'label'>;
export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  function InputLabel(props, ref) {
    return (
      <label
        ref={ref}
        className="font-roboto-medium text-base text-woodsmoke-200"
        {...props}
      />
    );
  }
);

interface InputContainerProps extends ComponentProps<'div'> {
  error?: boolean;
}

export const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  function InputContainer({ error = false, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-error={error}
        className="group bg-woodsmoke-800 h-12 border border-woodsmoke-600 rounded px-4 flex items-center gap-2 focus-within:border-eucalyptus-500 data-[error=true]:border-carnation-600"
        {...props}
      />
    );
  }
);

type InputIconProps = ComponentProps<'span'>;

export const InputIcon = forwardRef<HTMLSpanElement, InputIconProps>(
  function InputIcon(props, ref) {
    return (
      <span
        ref={ref}
        className="text-woodsmoke-400 group-focus-within:text-woodsmoke-200 group-[&:not(:has(input:placeholder-shown))]:text-eucalyptus-500 group-data-[error=true]:text-carnation-600"
        {...props}
      />
    );
  }
);

type InputFieldProps = ComponentProps<'input'>;
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    return (
      <input
        ref={ref}
        className="flex-1 font-roboto-regular text-sm text-white outline-0 bg-transparent"
        {...props}
      />
    );
  }
);
