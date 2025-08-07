import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import React, { Fragment, useState } from 'react';

function SortButton({ clients, setClients }) {
  const [currentSort, setCurrentSort] = useState('nameAsc');

  const sortClients = (sortType) => {
    const sortedClients = [...clients].sort((a, b) => {
      switch (sortType) {
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        case 'newest':
          return new Date(b.timestamp) - new Date(a.timestamp);
        case 'oldest':
          return new Date(a.timestamp) - new Date(b.timestamp);
        default:
          return 0;
      }
    });

    setClients(sortedClients);
    setCurrentSort(sortType);
  };

  return (
    <div>
      <Menu
        as="div"
        className="relative inline-block text-left w-full sm:w-auto"
      >
        <Menu.Button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 w-full justify-center">
          {currentSort === 'nameAsc'
            ? 'Name A-Z'
            : currentSort === 'nameDesc'
            ? 'Name Z-A'
            : currentSort === 'newest'
            ? 'Newest first'
            : 'Oldest first'}
          <ChevronDown className="w-4 h-4 ml-2" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => sortClients('nameAsc')}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700 w-full text-left ${
                      currentSort === 'nameAsc' ? 'bg-gray-50' : ''
                    }`}
                  >
                    Name A-Z
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => sortClients('nameDesc')}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700 w-full text-left ${
                      currentSort === 'nameDesc' ? 'bg-gray-50' : ''
                    }`}
                  >
                    Name Z-A
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default SortButton;
