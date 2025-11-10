"use client"

import { useId, useRef, useState } from "react"
import { CircleXIcon, SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"


export default function SearchProduct({ onSearch }: { onSearch: (term: string) => void }) {
    const id = useId()
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClearInput = () => {
        setInputValue("")
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setInputValue(val)
       
        console.log("from search product", val)
    }

    const handleSearchClick = ()=>{
        console.log("from onserach",onSearch(inputValue))
    }

    return (
        <div className="*:not-first:mt-2">
            <Label htmlFor={id}>Input with clear button</Label>
            <div className="relative">

                <Input
                    id={id}
                    ref={inputRef}
                    className="peer ps-9 pe-9"
                    placeholder="Search..."
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <SearchIcon size={16} />
                </div>
                {inputValue && (
                    <button
                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 transition-[color,box-shadow] outline-none hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Clear input"
                        onClick={handleClearInput}
                    >
                        <CircleXIcon size={16} aria-hidden="true" />
                    </button>
                )}

            </div>
            <Button
            onClick={handleSearchClick}
            type="button"
            disabled={!inputValue.trim()}
            >
                Search
            </Button>
        </div>
    )
}



