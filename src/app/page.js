"use client";

import dynamic from 'next/dynamic';

const FaceDetection = dynamic(() => import('./components/FaceDetection.js'), { ssr: false });

export default function Home() {
  return (
      <FaceDetection />
  );
}
