import { FC } from "react";

interface IMarqueText{
  text : string,
  className : string,
  speed : number
}
export const MarqueeText:FC<IMarqueText> = ({ text = "", className = "", speed = 30 }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`inline-block whitespace-nowrap ${className}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {/* Дублируем текст, чтобы не было разрыва */}
        {Array(6).fill(text).join(" • ")}
      </div>
      <style jsx>{
        `
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
        `}
        
      </style>
    </div>
  );
};