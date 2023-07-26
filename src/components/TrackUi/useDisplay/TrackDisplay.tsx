import { v4 } from "uuid";

import { ColorChangingLetters } from "@/components/Logo";

export const TrackDisplay = ({
  text,
  hiddenText,
}: {
  text: string[];
  hiddenText?: boolean;
}) => {
  return (
    <>
      {text.map((textRow) => (
        <div
          key={v4()}
          className={`text-center ${hiddenText ? "invisible" : ""}`}
        >
          {/* TODO: would be cool to have a rate of letter color change for each song */}
          <ColorChangingLetters
            text={textRow.toUpperCase()}
            initialRGB={[255, 255, 255]}
            initialDelay={5000}
          />
        </div>
      ))}
    </>
    // <div>
    //   <div className={`char-bg`}>
    //     {text.map((text) => (
    //       <div key={v4()} className="text-center">
    //         <span className={hiddenText ? "invisible" : ""}>
    //           {text.toUpperCase()}
    //         </span>
    //         <br />
    //       </div>
    //     ))}
    //   </div>
    //   <div
    //     key={v4()}
    //     className="shadow"
    //     style={{
    //       marginTop: text.length === 1 ? "-7.5rem" : "-15.5rem",
    //       marginLeft: "0.8rem",
    //       textShadow: "rgb(0, 0, 0) -3px -7px 0px",
    //     }}
    //   >
    //     {text.map((text) => (
    //       <div key={v4()} className="text-center">
    //         <span className={hiddenText ? "hidden" : ""}>
    //           {text.toUpperCase()}
    //         </span>
    //         <br />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};
