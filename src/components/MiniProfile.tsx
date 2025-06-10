import React from 'react';

function MiniProfile() {
    const imageId = 5;
    return (
        <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-900 transition-colors duration-200 cursor-pointer">
            <img
                className="h-15 w-15 rounded-full object-cover border border-gray-700"
                src={`https://picsum.photos/seed/user${imageId}/100/100`}
                alt="user"
            />
            <div>
                <p className="text-white font-semibold text-sm">Santiago</p>
                <p className="text-gray-400 text-xs">@santi_dev</p>
            </div>
        </div>
    );
}

export default MiniProfile;
