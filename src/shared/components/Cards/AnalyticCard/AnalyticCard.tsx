import React from "react";
import Card from "../Card/Card";
import CircularProgress from "../../CircularProgress/CircularProgress";
import Icons from "../../Icons/Icons";
import classNames from "classnames";
// import { CircularProgress } from "@nextui-org/progress";

type AnalyticCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  value: number;
  status: "idle" | "up" | "down";
  icon?: JSX.Element;
};

const AnalyticCard = ({ title, value, icon, status }: AnalyticCardProps) => {
  const parser = new Intl.NumberFormat("en-us");

  const statusColor = classNames({
    indigo: status == "idle",
    orange: status === "down",
    green: status === "up",
  });

  return (
    <Card>
      <div className="flex">
        <div className="flex flex-1 flex-col justify-between font-semibold">
          <h4 className="text-lg ">{title}</h4>
          <p className="text-xl">{parser.format(value)}</p>
        </div>
        <div className="">
          <CircularProgress
            labelIcon={icon}
            percent={50}
            classNames={{
              indicator: `stroke-${statusColor}-500`,
              track: `stroke-${statusColor}-100`,
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default AnalyticCard;
