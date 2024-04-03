import React from "react";

const EntriesPerPage = () => {
  return (
    <div>
      <span>Show</span>
      <select
        name="numEntries"
        className="w-20 mx-3 p-2 border border-[#1D1D1D33] rounded-md outline-none"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <span>Entires</span>
    </div>
  );
};

export default EntriesPerPage;
