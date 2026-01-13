import { useState } from 'react'
import './App.css'
import { SearchInput } from './components/SearchInput'

function App() {
    const [count, setCount] = useState(0)
    const [lastSearch, setLastSearch] = useState<string | null>(null)

    const handleSearch = (query: string) => {
        setLastSearch(query)
        console.log('Searching for:', query)
        // Here you would typically trigger an API call
    }

    return (
        <>
            <h1>Vite + React + Capacitor</h1>
            <div className="card">
                <SearchInput onSearch={handleSearch} />
                {lastSearch && <p>Last search: <strong>{lastSearch}</strong></p>}

                <div style={{ marginTop: '2rem' }}>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
