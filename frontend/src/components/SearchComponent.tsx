import { ChangeEvent, useEffect, useState } from "react"
import SERVER_URL from "../scripts/server"
import SearchResult from "../types/SearchResult"
import { useNavigate } from "react-router-dom"

function SearchComponent() {

    const navigate = useNavigate()

    const [ value, setValue ] = useState("")
    const [ isDropdownOpen, setDropDown ] = useState(false)
    const [ results, setResults ] = useState<SearchResult[]>([])
    const [ selectedResult, setSelectedResult ] = useState<SearchResult | null>(null)

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        async function fetchSearch() {
            try {
                const response = await fetch(SERVER_URL+'/search/'+value)
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setResults(data)
            }
            catch(error) {
                console.error(error)
            }
        }
        fetchSearch()
    }, [value])

    useEffect(() => {
        setDropDown(value!=="")
    }, [value])

    useEffect(() => {
        if(selectedResult) {
            const link = '/'+selectedResult.ResultType+"/"+selectedResult.ID
            console.log(selectedResult)
            console.log("Navigating to " + link)
            navigate(link)
            setSelectedResult(null)
            setDropDown(false)
            setValue("")
        }
    }, [selectedResult, navigate, value])

    return (
        <>
        <div>
            <label className="text-2xl flex flex-row mr-10"> 
                <span className="mr-3 content-center">Search:</span>
                <input
                className="max-w-xs"
                type="text"
                onFocus={() => setDropDown(value!=="")}
                onBlur={()=>setDropDown(false)}
                value={value}
                onChange={handleChange}/>
            </label>
            {isDropdownOpen && (
                <div 
                className="flex absolute border right-10 
                bg-white shadow-lg rounded max-w-sm w-full
                transition delay-150 ease-in-out">
                <ul className="w-full">
                    {results.map((result) => (
                        <li 
                        key={result.ResultType+result.ID}
                        className="w-full hover:shadow-lg rounded p-2 
                        hover:bg-gray-100 hover:scale-110 cursor-pointer"
                        onMouseDown={() => setSelectedResult(result)}
                        >{result.Name}</li>
                    ))}
                </ul>
                </div>
            )}
        </div>
        </>
    )
}

export default SearchComponent