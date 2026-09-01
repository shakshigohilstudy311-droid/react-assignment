function StudentCard({ name, course, email, semester }) {
  return (
    <div className="student-card">
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Email: {email}</p>
      <p>Semester: {semester}</p>
    </div>
  );
}
export default StudentCard;