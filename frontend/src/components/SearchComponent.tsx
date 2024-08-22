import { ChangeEvent, useEffect, useState } from "react"

type SearchComponentProps = {
    // nothingrn:string
}
function SearchComponent(props:SearchComponentProps) {

    const [ value, setValue ] = useState("")
    const [ isDropdownOpen, setDropDown ] = useState(false)
    const [ dropDownFocused, setDropDownFocus ] = useState(false)

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        setDropDown(value!=="")
    }, [value])

    const options = ["Option 1", "Option 2", "Option 3"]

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
                    {options.map((option) => (
                        <li 
                        className="w-full hover:shadow-lg rounded p-2 
                        hover:bg-gray-100 hover:scale-110 cursor-pointer"
                        >{option}</li>
                    ))}
                </ul>
                </div>
            )}
        </div>
        </>
    )
}

export default SearchComponent