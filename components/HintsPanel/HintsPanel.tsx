import { useState } from "react";
import HINTS from "@/data/hints";
import PROBLEM_TOPICS from "@/data/topics";
import PROBLEM_RESOURCES from "@/data/resources";

import HintItem from "./HintItem";
import TopicsPanel from "./TopicsPanel.tsx";
import ResourcesPanel from "./ResourcesPanel.tsx";
import ViewSolution from "./ViewsolutionPanel.tsx";
//import { containerStyle } from "./styles";

import { getStyles } from "./styles";
type Props = {
  problemId: string;
};

export default function HintsPanel({ problemId }: Props) {
  const styles = getStyles();
  const hints = HINTS[problemId as keyof typeof HINTS] || [];
  const topics = PROBLEM_TOPICS[problemId as keyof typeof PROBLEM_TOPICS] || [];
  const resources =
    PROBLEM_RESOURCES[problemId as keyof typeof PROBLEM_RESOURCES] || [];

  const [open, setOpen] = useState<Record<string | number, boolean>>({});

  const toggle = (key: string | number) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  //if (!hints.length) return null;
  // this will stop the whole rendering process;


  return (
    <div style={styles.containerStyle}>
      {/* {hints.map((hint, i) => ( */}
      {/*   <HintItem */}
      {/*     key={i} */}
      {/*     index={i} */}
      {/*     text={hint} */}
      {/*     open={!!open[i]} */}
      {/*     toggle={toggle} */}
      {/*   /> */}
      {/* ))} */}

      {hints.length > 0 ? (
        hints.map((hint, i) => (
          <HintItem
            key={i}
            index={i}
            text={hint}
            open={!!open[i]}
            toggle={toggle}
          />
        ))
      ) : (
        <div
          style={{
            padding: "8px 12px",
            color: "#888",
            fontStyle: "italic",
          }}
        >
          Hints will be added soon
        </div>
      )}


      <TopicsPanel
        topics={topics}
        open={!!open.topics}
        toggle={() => toggle("topics")}
      />

      <ViewSolution
        questionId={problemId}
      />

      <ResourcesPanel
        resources={resources}
        open={!!open.resources}
        toggle={() => toggle("resources")}
      />
    </div>
  );
}

