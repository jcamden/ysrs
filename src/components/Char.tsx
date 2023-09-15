interface Char {
  children: string;
}

export const Char = ({ children }: Char) => (
  <div>
    <div className="char-bg big-text font-ubuntu" style={{ lineHeight: "1" }}>
      {children}
    </div>
    <div
      className="char big-text text-white font-ubuntu"
      style={{
        fontSize: "32rem",
        lineHeight: "1",
        marginTop: "-31.5rem",
        marginLeft: "1rem",
      }}
    >
      {children}
    </div>
  </div>
);
