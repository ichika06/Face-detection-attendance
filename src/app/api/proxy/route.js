import http from "http";
import { NextResponse } from "next/server";

export async function GET() {
  const streamUrl = "http://192.168.1.10/stream";

  return new Promise((resolve) => {
    http.get(streamUrl, (res) => {
      if (res.statusCode !== 200) {
        console.error("Stream error:", res.statusCode);
        return resolve(
          NextResponse.json({ error: "Stream error" }, { status: 500 })
        );
      }

      const headers = new Headers({
        "Content-Type": "multipart/x-mixed-replace; boundary=frame",
        "Access-Control-Allow-Origin": "*",
      });

      resolve(new Response(res, { headers }));
    }).on("error", (err) => {
      console.error("Stream fetch error:", err.message);
      resolve(
        NextResponse.json({ error: "Failed to fetch the stream" }, { status: 500 })
      );
    });
  });
}
