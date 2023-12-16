import React from "react";

type Props = {
  /**
   * Maximum 100 -> 100%
   */
  percent: number;
  classNames: {
    indicator: string;
    track: string;
  };
  labelIcon?: JSX.Element;
};

const CircularProgress = ({ percent, classNames, labelIcon }: Props) => {
  const baseValue = 87.96459430051421;

  const computedValue = 100 - baseValue * (percent / 100);
  return (
    <div className="relative">
      <svg
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="2"
        className="z-0 relative overflow-hidden text-primary w-36 h-36"
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          role="presentation"
          strokeDasharray="87.96459430051421"
          strokeDashoffset="0"
          transform="rotate(-90 16 16)"
          strokeLinecap="round"
          className={`h-full ${classNames.track ?? "stroke-blue-100"}`}
        ></circle>
        <circle
          cx="16"
          cy="16"
          r="14"
          role="presentation"
          strokeDasharray="87.96459430051421"
          strokeDashoffset={computedValue}
          transform="rotate(-90 16 16)"
          strokeLinecap="round"
          className={`h-full transition-all ${
            classNames.indicator ?? "stroke-blue-500"
          }`}
        ></circle>
      </svg>
      {labelIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {labelIcon}
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
