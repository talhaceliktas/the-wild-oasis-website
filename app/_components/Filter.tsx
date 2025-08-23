"use client";

const Filter = () => {
  function handleFilter(filter) {}

  return (
    <div className="border-primary-800 flex border">
      <button
        className="hover:bg-primary-700 px-5 py-2"
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className="hover:bg-primary-700 px-5 py-2"
        onClick={() => handleFilter("small")}
      >
        1 &mdash; 3 guests
      </button>
      <button
        className="hover:bg-primary-700 px-5 py-2"
        onClick={() => handleFilter("medium")}
      >
        4 &mdash; 7 guests
      </button>
      <button
        className="hover:bg-primary-700 px-5 py-2"
        onClick={() => handleFilter("large")}
      >
        8 &mdash; 12 guests
      </button>
    </div>
  );
};

export default Filter;
