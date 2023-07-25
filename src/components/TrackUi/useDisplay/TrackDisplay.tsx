import { v4 } from "uuid";

export const TrackDisplay = ({
  text,
  hiddenText,
}: {
  text: string[];
  hiddenText?: boolean;
}) => {
  return (
    <div>
      <div className={`char-bg`}>
        {text.map((text) => (
          <div key={v4()} className="text-center">
            <span className={hiddenText ? "invisible" : ""}>
              {text.toUpperCase()}
            </span>
            <br />
          </div>
        ))}
      </div>
      <div
        key={v4()}
        className="shadow"
        style={{
          marginTop: text.length === 1 ? "-7.5rem" : "-15.5rem",
          marginLeft: "0.8rem",
          textShadow: "rgb(0, 0, 0) -3px -7px 0px",
        }}
      >
        {text.map((text) => (
          <div key={v4()} className="text-center">
            <span className={hiddenText ? "hidden" : ""}>
              {text.toUpperCase()}
            </span>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};
