import React from "react"

interface Props {
  onClick: (e: any) => any;
  styles: string;
};

const EyeIcon: React.FunctionComponent<Props> = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="eye"
      className="prefix__svg-inline--fa prefix__fa-eye prefix__fa-w-18"
      viewBox="0 0 576 512"
      className={props.styles}
      onClick={props.onClick}
    >
      <path
        fill="currentColor"
        d="M288 144a110.94 110.94 0 00-31.24 5 55.4 55.4 0 017.24 27 56 56 0 01-56 56 55.4 55.4 0 01-27-7.24A111.71 111.71 0 10288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 000 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 000-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
      />
    </svg>
  )
}

export default EyeIcon;
