import { memo, useEffect, useState } from "react";
import SelectCss from "./Select.module.scss";

export interface Option {
  title: string;
  value: string;
}

interface Props {
  value: string[];
  placeholder: string;
  options: Option[];
  selectFn: (value: string[]) => void;
}

export const Select = memo(
  ({ value, placeholder, options, selectFn }: Props) => {
    // console.log("Select");

    const [open, setOpen] = useState(false);

    const clickHandleEvent = () => {
      setOpen(false);
    };

    useEffect(() => {
      window.document.addEventListener("click", clickHandleEvent);

      return () => {
        window.document.removeEventListener("click", clickHandleEvent);
      };
    }, []);

    const showOptions = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.stopPropagation();

      setOpen(!open);
    };

    const data = options.map((option) => (
      <div
        key={option.value}
        onClick={() => selectFn([option.value])}
        className={SelectCss.option}
      >
        <span>{option.title}</span>

        {value.includes(option.value) && (
          <span className="material-symbols-outlined">done</span>
        )}
      </div>
    ));

    return (
      <button className={SelectCss.host} onClick={(e) => showOptions(e)}>
        <div className={SelectCss.select}>
          <div className={SelectCss.value}>
            <span className={SelectCss.placeholder}>{placeholder}</span>

            <span>
              {value.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </span>
          </div>

          <span className="material-symbols-outlined">expand_more</span>
        </div>

        {open && <div className={SelectCss.options}>{data}</div>}
      </button>
    );
  }
);
