import "./style.css";

export default function Modal({ visible, str }) {
  if (visible)
    return (
      <section className="modalBG">
        <div className="modal">
          <p>{str}</p>
        </div>
      </section>
    );
}
