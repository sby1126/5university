"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { clsx } from "clsx";
import Link from "next/link";

type ClassProps = {
  right: string;
  left: string;
  top: string;
  bottom: string;
};

type toggleProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  side: string;
};
const openClassNames: ClassProps = {
  right: "translate-x-0",
  left: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0",
};

const closeClassNames: ClassProps = {
  right: "translate-x-full",
  left: "-translate-x-full",
  top: "-translate-y-full",
  bottom: "translate-y-full",
};

const classNames: ClassProps = {
  right: "inset-y-0 right-0",
  left: "inset-y-0 left-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

export default function Drawer({ open, setOpen, side = "top" }: toggleProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      <div
        className={clsx(
          "fixed inset-0 bg-gray-500 bg-opacity-75 transition-all",
          {
            "opacity-100 duration-500 ease-in-out visible": open,
          },
          { "opacity-0 duration-500 ease-in-out invisible": !open }
        )}
      ></div>
      <div className={clsx({ "fixed inset-0 overflow-hidden": open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              "pointer-events-none fixed max-w-full",
              classNames.top
            )}
          >
            <div
              className={clsx(
                "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
                { [closeClassNames.top]: !open },
                { [openClassNames.top]: open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className={clsx(
                  "flex flex-col h-full bg-black gap-5 shadow-xl text-white justify-center items-center py-3"
                )}
              >
                <Link
                  className="py-5"
                  href="/sub/arts"
                  onClick={() => setOpen(false)}
                >
                  Arts
                </Link>
                <Link
                  className="py-5"
                  href="/sub/about"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <Link
                  className="py-5"
                  href="/sub/cv"
                  onClick={() => setOpen(false)}
                >
                  CV
                </Link>
                <Link
                  className="py-5"
                  href="/sub/statement"
                  onClick={() => setOpen(false)}
                >
                  Statement
                </Link>
                <Link
                  className="py-5"
                  href="/sub/contatct"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <div className="py-3" onClick={() => setOpen(false)}>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
