/**
 *
 * @param {boolean} checked
 * @param onChange
 * @param {string} label
 * @param {string} id
 * @returns {JSX.Element}
 * @constructor
 */
export function Checkbox({checked, onChange, label, id}) {
    return <div className={"form-check"}>
        <input
            id={id}
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}