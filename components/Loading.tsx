"use client";
import ReactLoading, { LoadingType } from "react-loading";

type LoadingProps = {
  type?: LoadingType;
  color?: string;
};

const Loading = ({ type = "cylon", color = "#031330" }: LoadingProps) => (
  <div className="flex h-screen w-full items-center justify-center">
    <ReactLoading type={type} color={color} height={50} width={50} />
  </div>
);

export default Loading;
