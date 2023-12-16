import React from "react";
import css from "./Card.module.scss";
import classNames from "classnames";

type CardProps = React.HTMLAttributes<HTMLDivElement>
type ComponentProps = React.PropsWithChildren<CardProps>;

const Card = ({ children ,className,...props }: ComponentProps) => {

  const css = classNames(className,"p-6 border-1 rounded-xl")
  return <div {...props} className={css} >{children}</div>;
};

export default Card;
