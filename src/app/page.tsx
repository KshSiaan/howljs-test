"use client";
import { useState } from "react";
import howl from "@/lib/howl/howl";
import Wolf from "@/lib/howl/wolf";
// import Image from "next/image";

export default function Home() {
  const [dummData] = useState({
    name: "Raven 2",
    data: {
      year: 2025,
      price: 357,
      "CPU model": "Raven B2P",
      "Hard disk size": "10mb",
    },
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const call = await howl({
        link: "https://api.restful-api.dev/objects",
        method: "post",
        data: dummData,
      });
      setResponse(call); // Set the API response
    } catch (error) {
      console.error("Error during the API call:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Sending..." : "Send Request"}
      </button>

      {response && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {/* <Image
        src={image.message ? image.message : null}
        height={400}
        width={400}
        alt="thumbnail"
      /> */}

      <Wolf/>
    </div>
  );
}
