import React from "react";
import Iframe from "react-iframe";

export default function CaptureTeacher() {
  return (
    <Iframe
      url="https://shikshak.gitaalekhyapaul.com/teacher"
      id="videop"
      allow="camera https://shikshak.gitaalekhyapaul.com; microphone https://shikshak.gitaalekhyapaul.com"
    />
  );
}
