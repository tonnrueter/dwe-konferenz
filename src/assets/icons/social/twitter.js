import clsx from "clsx";
import React from "react";

const TwitterIcon = ({ fillColor = "purple", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="61"
      viewBox="0 0 60 61"
      className={clsx(`fill-${fillColor}`, className)}
    >
      <path d="M30 .153c-16.567 0-30 13.433-30 30s13.433 30 30 30 30-13.433 30-30-13.433-30-30-30zm14.417 22.614c.02.314.02.643.02.964 0 9.83-7.486 21.154-21.167 21.154-4.219 0-8.13-1.225-11.424-3.335a15.96 15.96 0 001.795.094 14.92 14.92 0 009.234-3.174 7.439 7.439 0 01-6.95-5.157c1.144.168 2.175.168 3.354-.133a7.433 7.433 0 01-5.953-7.3v-.093a7.443 7.443 0 003.355.944 7.442 7.442 0 01-3.315-6.188 7.29 7.29 0 011.011-3.75 21.112 21.112 0 0015.335 7.775c-1.051-5.056 2.726-9.147 7.266-9.147 2.142 0 4.071.897 5.43 2.343a14.693 14.693 0 004.721-1.787 7.403 7.403 0 01-3.267 4.091c1.5-.16 2.946-.576 4.285-1.159a15.588 15.588 0 01-3.73 3.858z"></path>
    </svg>
  );
};

export default TwitterIcon;
