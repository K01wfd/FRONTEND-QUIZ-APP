function SubjectIcon({ iconBgClass, icon, alt }) {
  return (
    <div className={`subjectIconWrapper ${iconBgClass}`}>
      <img src={icon} alt={`${alt} icon`} />
    </div>
  );
}

export default SubjectIcon;
