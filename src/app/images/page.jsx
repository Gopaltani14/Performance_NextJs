"use client";
import Image from "next/image";
import React from "react";

function Images() {
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <div>
        <Image src="/20mb.jpg" alt="image1" width={300} height={300} />
        <Image src="/20mb2.jpg" alt="image2" width={300} height={300} />
        <Image src="/20mb3.jpg" alt="image3" width={300} height={300} />
      </div>
    </div>
  );
}

export default Images;
