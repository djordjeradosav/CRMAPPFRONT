import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, Filter } from 'lucide-react';
import React, { Fragment } from 'react';

function FilterButton() {
  return (
    <div>
      {' '}
      <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 w-full sm:w-auto justify-center">
        <Filter className="w-4 h-4 mr-2" />
        Filter
      </button>
    </div>
  );
}

export default FilterButton;
