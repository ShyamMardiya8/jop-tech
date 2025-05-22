'use client'
import Image from "next/image";
import Toggle from "./component/Toggle";
import { useState } from "react";

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
   <Toggle
        label="Enable Notifications"
        checked={isToggled}
        onChange={(e) => setIsToggled(e.target.checked)}
      />
    </>
  );
}
