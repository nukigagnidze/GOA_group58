function CourseCard({ title, instructor, duration, price = "Free", isFree, onEnroll, children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>{title}</h2>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Price:</strong> {price}</p>
      {isFree && <span style={{ color: "green", fontWeight: "bold" }}>Free Course</span>}
      <br />
      <button onClick={() => onEnroll(title)}>Enroll</button>
      <div>{children}</div>
    </div>
  );
}

export default CourseCard;
