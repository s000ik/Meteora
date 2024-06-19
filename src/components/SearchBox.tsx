/** @format */

import { cn } from "@/utils/cn";
import React from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        props.className
      )}
    >
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Where to next?"
        className="px-4 py-2 w-[230px] border border-yellow-300 rounded-l-md focus:outline-none  focus:border-yellow-500 h-full"
      />
      <button className="px-4 py-[9px] bg-yellow-400 text-white rounded-r-md focus:outline-none hover:bg-yellow-500  h-full">
        <IoSearch />
      </button>
    </form>
  );
}
