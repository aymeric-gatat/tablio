export const generateOptions = (tens) => {
  const options = [];
  for (let i = 15; i <= tens; i += 15) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return options;
};
