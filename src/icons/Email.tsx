import { IconProps } from "../types";

export const Email = ({ filled = false }: IconProps) => (
  <svg
    viewBox="0 0 512 512"
    aria-label="Email icon"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={filled ? "#1D9BF0" : "currentColor"}
      d="M464.004 4.326L15.986 262.714c-23 13.3-20.7 47.198 3.8 57.297l140.206 57.997v101.996c0 30.198 37.802 43.298 56.702 20.299l60.703-73.797L403.8 478.704c19.101 7.9 40.702-4.2 43.802-24.7l64.003-417.08c4.1-26.698-24.601-45.897-47.602-32.598zm-272.01 475.678v-88.796l54.501 22.499zm224.008-30.899l-206.208-85.196L409.302 128.12c4.8-5.6-2.9-13.199-8.5-8.4l-255.31 217.59-113.505-46.797L480.004 32.025z"
    />
  </svg>
);
export default Email;
