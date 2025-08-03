export default function SearchComposent({ value, onChange }) {
  return (
    <>
      <p>
        Search : <input type="search" name="search" id="search" value={value} onChange={onChange} />
      </p>
    </>
  );
}
