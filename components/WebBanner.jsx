import Image from "next/future/image";
import React from "react";

export default function WebBanner() {
  return (
    <div>
      <Image
        src="/banner-min.webp"
        alt="Build your projects with us"
        width={1886}
        height={942}
      />
    </div>
  );
}
