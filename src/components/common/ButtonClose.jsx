import React, { useState } from 'react';

function ButtonClose() {
  return (
    <div className="mt-6">
      <button
        type="button"
        className="w-full inline-flex justify-center rounded-lg border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors"
      >
        Close
      </button>
    </div>
  );
}

export default ButtonClose;
