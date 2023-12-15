"use client";

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
// @ts-ignore
import { useFormStatus } from "react-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton = (props: ButtonProps) => {
  const status = useFormStatus();
  const { children, ...rest } = props;

  return (
    <button disabled={status.pending} {...rest}>
      {status.pending ? "Loading..." : children}
    </button>
  );
};

export default SubmitButton;
