import CourseCard from './CourseCard';
import { courses } from './courses';

function CourseList() {
  const handleEnroll = (courseTitle) => {
    alert(`You enrolled in ${courseTitle}`);
  };

  return (
    <div>
      <h1>📚 Course Catalog</h1>
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          {...course}
          onEnroll={handleEnroll}
        >
          {}
          {course.title === "Advanced JavaScript" && <em>🔥 Tag: Bestseller</em>}
        </CourseCard>
      ))}
    </div>
  );
}

export default CourseList;
