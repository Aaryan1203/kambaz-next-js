import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span
      className="position-relative d-inline-flex align-items-center justify-content-center"
      style={{ width: 20, height: 20 }}
    >
      <FaCircle
        className="text-white"
        style={{ position: "absolute", zIndex: 0, fontSize: 18 }}
      />
      <FaCheckCircle
        className="text-success"
        style={{ position: "relative", zIndex: 1, fontSize: 18 }}
      />
    </span>
  );
}
