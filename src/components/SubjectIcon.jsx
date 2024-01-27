function SubjectIcon({ iconBgClass, icon, title }) {
  return (
    <div className={`subjectIconWrapper ${iconBgClass}`}>
      <img src={icon} alt={`${title} icon`} />
    </div>
  );
}

export default SubjectIcon;
