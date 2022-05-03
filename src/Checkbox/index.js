import "./index.css";

export default function Checkbox({ inputProps, label }) {
  return (
    <label className="checkbox">
      {label}
      <input type="checkbox" {...inputProps} />
      <span className="checkmark"></span>
    </label>
  );
}
