'use client';
import { Button } from "@/components/ui/button";
import { desktop } from "@/data/nav";
import { useState, useRef, useEffect } from "react";
import { Plane, MapPin, Clock, UserRound, Wifi, Users, CreditCard, type LucideIcon } from 'lucide-react';


const iconMap: Record<string, LucideIcon> = {
    'Destinations': MapPin,
    'Travel Classes': Plane,
    'Services': UserRound,
    'Offers': CreditCard,
};

export function DesktopHeader() {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navItemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnter = (id: number) => {
        
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveDropdown(id);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
            setIsOpen(false);
        }, 150); 
    };

    const handleDropdownMouseEnter = () => {
        
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleDropdownMouseLeave = () => {
        setActiveDropdown(null);
        setIsOpen(false);
    };

    const handleItemClick = (id: number) => {
        console.log('Selected:', id);
        setActiveDropdown(null);
        setIsOpen(false);
    };

    return (
        <div className="relative bg-sky-800">
            <nav className="flex justify-between items-center py-4 px-6 border-b-2 border-b-amber-500">
                <span className="text-2xl font-bold text-white">
                    Air-Swift
                </span>

                <ul className="flex gap-8">
                    {desktop.map((el, idx) => {
                        const IconComponent = iconMap[el.service] || MapPin;
                        
                        return (
                            <li 
                                key={el.id}
                                ref={(ref) => { navItemRefs.current[idx] = ref; }}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(el.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="flex items-center gap-2 cursor-pointer text-white hover:text-amber-300 transition-colors py-2 px-1">
                                    <IconComponent size={18} />
                                    <span className="font-medium">{el.service}</span>
                                </div>
                                
                                {activeDropdown === el.id && isOpen && (
                                    <div className="absolute top-full left-0 w-full h-2 bg-transparent" />
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="flex gap-3">
                    <Button variant="outline" className="h-9 bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                        Login
                    </Button>
                    <Button className="h-9 bg-amber-500 hover:bg-amber-600 text-white">
                        Sign up
                    </Button>
                </div>
            </nav>

            {isOpen && activeDropdown !== null && (
                <div 
                    ref={dropdownRef}
                    className="absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-white rounded-b-xl shadow-2xl border border-t-0 border-gray-200  z-50"
                    style={{ top: '100%' }} 
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                >
                    {desktop
                        .filter((el) => el.id === activeDropdown)
                        .map((menu) => {
                            const IconComponent = iconMap[menu.service];
                            
                            return (
                                <div key={menu.id} className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        {IconComponent && <IconComponent size={20} className="text-blue-600" />}
                                        {menu.service}
                                    </h3>
                                    
                                    
                                    <div className="grid grid-cols-4 gap-4">
                                        {menu.dropDown?.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() => handleItemClick(item.id)}
                                                className="group relative cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                                            >
                                                
                                                <div className="relative h-32 w-full overflow-hidden bg-gray-200">
                                                    <div 
                                                        className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                                                        style={{ 
                                                            backgroundImage: `url(${item.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'})`,
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                                                    
                                                    
                                                    {item.price && (
                                                        <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                            {item.price}
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                
                                                <div className="p-3 bg-white">
                                                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                                                        {item.itemA}
                                                    </h4>
                                                    <p className="text-xs text-gray-600 line-clamp-2">
                                                        {item.phrase}
                                                    </p>
                                                    
                                                    <div className="flex gap-2 mt-2 text-gray-400">
                                                        <Wifi size={12} />
                                                        <Clock size={12} />
                                                        <Users size={12} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
}