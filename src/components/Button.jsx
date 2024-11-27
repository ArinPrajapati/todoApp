import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded focus:outline-none transition";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
    outline:
      "border border-gray-500 text-gray-500 hover:bg-gray-100 disabled:border-gray-300 disabled:text-gray-300",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={classNames(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
