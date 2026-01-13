import React, { useState } from 'react';
import './SearchInput.css';

interface SearchInputProps {
    onSearch: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <div className="search-input-container">
            <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search recipes..."
                enterKeyHint="search"
                className="search-input"
            />
        </div>
    );
};
