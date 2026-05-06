import clsx from "clsx";

type ArrowIconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const ArrowIcon = ({ className, ...props }: ArrowIconProps) => {
  return (
    <svg
      {...props}
      className={clsx("inline-block", className)}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.875 0V7.4375H6.5625V2.24L0.9275 7.875L0 6.9475L5.635 1.3125H0.4375V0H7.875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowIcon;
