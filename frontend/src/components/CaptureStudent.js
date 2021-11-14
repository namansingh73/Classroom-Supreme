import React from "react";
import Iframe from "react-iframe";

export default function CaptureStudent() {
  return (
    <Iframe
      url="https://shikshak.gitaalekhyapaul.com/student"
      id="videop"
      allow="camera https://shikshak.gitaalekhyapaul.com; microphone https://shikshak.gitaalekhyapaul.com"
    />
  );
}
