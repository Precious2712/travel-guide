'use client';

import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

export function DropdownInput({
    value,
    onChange,
    options,
    placeholder,
    className
}: {
    value: string;
    onChange: (val: string) => void;
    options?: string[];
    placeholder?: string;
    className?: string;
}) {

    const [showDropdown, setShowDropdown] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!options || !options.length) return;

        if (e.key === 'ArrowDown') {
            setActiveIndex((prev) => Math.min(prev + 1, options.length - 1));
        } else if (e.key === 'ArrowUp') {
            setActiveIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
            if (activeIndex >= 0 && activeIndex < options.length) {
                onChange(options[activeIndex]);
                setShowDropdown(false);
            }
        }
    };

    return (
        <div className="relative" ref={containerRef}>
            <Input
                value={value}
                onChange={(e) => { onChange(e.target.value); setShowDropdown(true); setActiveIndex(-1); }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={className}
            />
            {showDropdown && options && options.length > 0 && (
                <ul className="absolute z-50 w-full bg-white/90 text-black rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {options.map((opt, idx) => (
                        <li
                            key={opt}
                            onMouseDown={() => { onChange(opt); setShowDropdown(false); }}
                            className={`px-4 py-2 cursor-pointer ${idx === activeIndex ? 'bg-blue-500 text-white' : ''}`}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}