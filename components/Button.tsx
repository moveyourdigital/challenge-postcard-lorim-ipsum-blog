import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import omit from "../functions/omit";

const Button: FC<
  PropsWithChildren<
    ButtonHTMLAttributes<
      HTMLButtonElement
    >
  >
> = (props) => {
  const {
    children,
    className,
  } = props

  return (
    <button
      className={`${className} bg-gray-700 text-white px-5 py-2 rounded`}
      {...omit(props, "children", "className")}
    >
      {children}
    </button>
  )
}

export default Button;