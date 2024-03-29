import React from "react";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Filter from "./components/filter";
import SearchResults from "./components/searchResults"

const Search = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar />
      </div>  
      <Filter />
      <SearchResults/>
      <Footer />
    </div>
  );
};

export default Search;
