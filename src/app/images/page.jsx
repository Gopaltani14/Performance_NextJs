"use client";
import Image from "next/image";
import React from "react";

function Images() {
  return (
    <div>
      Images
      <div>
        <Image src="/20mb1.jpg" alt="image1" width={500} height={500} />
        <Image src="/20mb2.jpg" alt="image2" width={500} height={500} />
        <Image src="/20mb3.jpg" alt="image3" width={500} height={500} />
      </div>
    </div>
  );
}

export default Images;
