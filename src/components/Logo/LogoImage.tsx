import { v4 } from "uuid";

export const LogoImage = ({
  text,
  hiddenText,
}: {
  text: string[];
  hiddenText?: boolean;
}) => {
  return (
    <div style={{ fontSize: "20rem" }}>
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
          marginTop: "-19rem",
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
          marginTop: "-21.5rem",
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
