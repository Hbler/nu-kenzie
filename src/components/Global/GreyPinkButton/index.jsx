import "./style.css";

export default function GrayPinkButton({ str, bool }) {
  const classList = bool ? "active gray-pink-btn" : "gray-pink-btn";
  return <button className={classList}>{str}</button>;
}
