import "../styles.scss";

const workHistory = [
  { name: "YML", title: "Software Engineer", year: "2018-19" },
  { name: "Locus.sh", title: "Senior Software Engineer", year: "2019-22" },
  { name: "Byjus'", title: "Senior Software Engineer", year: "2022-Present" },
];

const Timeline = () => {
  return (
    <ol className="timeline animate">
      {workHistory.map((item) => (
        <li className="timeline-element" key={item.name}>
          <span>
            <div className="flex flex-col text-sm">
              <div>{item.name}</div>
              <div>{item.title}</div>
              <div>{item.year}</div>
            </div>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
