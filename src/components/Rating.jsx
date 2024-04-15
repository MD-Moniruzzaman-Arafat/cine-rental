import star from "../assets/star.svg";

export default function rating({ value }) {
  const ratings = Array(value).fill(star);
  return (
    <>
      {ratings.map((rating, idx) => (
        <img key={idx} src={rating} width="14" height="14" alt="" />
      ))}
    </>
  );
}
