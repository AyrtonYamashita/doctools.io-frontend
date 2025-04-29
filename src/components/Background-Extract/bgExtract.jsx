// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./bgExtract.css";

function Background() {
  return (
    <div className="container-bg">
      <div className="blob-scene">
        <svg
          id="visual"
          viewBox="0 0 3840 2160"
          width="3840"
          height="2160"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(1955.2955203319423 865.5155609622158)">
            <path
              d="M466.4 -706.6C639.2 -708.1 837.9 -653.3 957.2 -526.2C1076.4 -399 1116.2 -199.5 1109 -4.2C1101.8 191.2 1047.6 382.3 961.6 567.1C875.6 751.8 757.8 930.2 592.2 1032.1C426.7 1134 213.3 1159.5 26.4 1113.7C-160.5 1068 -321 951 -479.8 845.2C-638.5 739.3 -795.6 644.7 -940.3 505.7C-1085.1 366.7 -1217.5 183.3 -1170.9 26.9C-1124.3 -129.5 -898.6 -259 -715.8 -332.1C-533 -405.1 -393.1 -421.8 -280.9 -455.2C-168.8 -488.6 -84.4 -538.8 31.2 -592.9C146.8 -647 293.7 -705 466.4 -706.6"
              fill="#3474eb"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Background;
