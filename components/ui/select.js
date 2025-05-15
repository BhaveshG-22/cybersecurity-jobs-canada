import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";

export const Select = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          ref={forwardedRef}
          className="flex items-center">
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon className="w-4 h-4" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content>
            <SelectPrimitive.Viewport className="p-2 bg-white border rounded-lg shadow-lg">
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

export const SelectItem = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        {...props}
        ref={forwardedRef}
        className="px-3 py-1 text-gray-700 rounded-full cursor-pointer focus:text-black">
        <SelectPrimitive.ItemText>
          {children}
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);
