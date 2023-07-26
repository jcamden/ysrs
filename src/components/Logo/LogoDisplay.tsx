import { v4 } from "uuid";

export const LogoDisplay = ({
  text,
  hiddenText,
}: {
  text: string[];
  hiddenText?: boolean;
}) => {
  return (
    <div>
      <div
        className={`char-bg font-jammyCreamer font-bold`}
        style={{ textShadow: "rgb(0, 0, 0) 2px 2px 0px" }}
      >
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
        className={`char-bg font-jammyCreamer font-bold`}
        style={{
          textShadow: "#FFFFFF40 0px 0px 80px",
          marginTop: "-7.5rem",
        }}
      >
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
        className="shadow font-jammyCreamer "
        style={{
          marginTop: text.length === 1 ? "-8.8rem" : "-15.5rem",
          marginLeft: "0.4rem",
          textShadow: "rgb(0, 0, 0) 2px 2px 0px",
          color: "#FFFFFF",
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
