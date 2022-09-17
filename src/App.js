import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import HTUT from "./pages/Htut";
import Story from "./pages/Story";
import Adventure from "./pages/Adventure";
import Request from "./pages/Request";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const anchors = ["htut", "origin", "adventure", "request"];

const App = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <motion.div
        ref={ref}
        className="w-2 h-2 bg-red-200 rounded-full absolute z-50 hidden md:block"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 7,
          stiffness: 100,
          restDelta: 0.001,
        }}
      />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        navigat
        sectionsColor={["#201056", "#090425", "#090425", "#090425"]}
        onLeave={(origin, destination, direction) => {
          // console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          // console.log("render prop change", state, fullpageApi);

          return (
            <div>
              <HTUT />
              <Story />

              <Adventure />

              <Request />
            </div>
          );
        }}
      />
    </>
  );
};
export default App;
