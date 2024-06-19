import Star from "./Star";

type StarsProps = {
	count: number;
}

const Stars = ({ count = 0 } : StarsProps) => {
  if (!Number.isFinite(count) || count < 1 || count > 5) {
    return (
      <ul className="card-body-stars u-clearfix">
        <Star />
      </ul>
    );
  }
  let starsArray = Array(count).fill(1);
  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray.map((star, i) => (
        <Star key={i} />
      ))}
    </ul>
  );
}

export default Stars;