import React, { useState } from 'react';

import { Search } from 'lucide-react';

const SearchButton = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {}}
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Search className="h-5 w-5 mr-2" />
        Search
      </button>
    </div>
  );
};

export default SearchButton;
