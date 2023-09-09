"use client";
import { useState } from "react";

import Link from 'next/link';
import FilterButton from './filterbutton';
import ProjectList from './ProjectList';



export default function filter() {
    const [categoryFilter, setCategoryFilter] = useState('featured'); // Default to category 1

    const handleCategoryButtonClick = (category) => {
        setCategoryFilter(category);
    };

    return (



        <div class="">
            <div className="flex flex-col h-3"></div>
            <div
                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
                <div
                    className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                >
                    <button onClick={() => handleCategoryButtonClick('featured')} class="inline-block px-3">
                        <FilterButton buttonText={"Featured"} />
                    </button>


                    <button onClick={() => handleCategoryButtonClick('2')} class="inline-block px-3">
                        <FilterButton buttonText={"2"} />
                    </button>


                    <button onClick={() => handleCategoryButtonClick('3')} class="inline-block px-3">
                        <FilterButton buttonText={"3"} />
                    </button>


                    <button onClick={() => handleCategoryButtonClick('4')} class="inline-block px-3">
                        <FilterButton buttonText={"4"} />
                    </button>


                    <button onClick={() => handleCategoryButtonClick('5')} class="inline-block px-3">
                        <FilterButton buttonText={"5"} />
                    </button>


                    <button onClick={() => handleCategoryButtonClick('6')} class="inline-block px-3">
                        <FilterButton buttonText={"6"} />
                    </button>


                    <button onClick={() => handleCategoryButtonClick('7')} class="inline-block px-3">
                        <FilterButton buttonText={"7"} />
                    </button>

                    <button onClick={() => handleCategoryButtonClick('7')} class="inline-block px-3">
                        <FilterButton buttonText={"7"} />
                    </button>

                    <button onClick={() => handleCategoryButtonClick('7')} class="inline-block px-3">
                        <FilterButton buttonText={"7"} />
                    </button>

                    <button onClick={() => handleCategoryButtonClick('7')} class="inline-block px-3">
                        <FilterButton buttonText={"7"} />
                    </button>

                    <button onClick={() => handleCategoryButtonClick('7')} class="inline-block px-3">
                        <FilterButton buttonText={"7"} />
                    </button>

                    <button onClick={() => handleCategoryButtonClick('7')} class="inline-block px-3">
                        <FilterButton buttonText={"7"} />
                    </button>

                    <button onClick={() => handleCategoryButtonClick('7')} class="inline-block px-3">
                        <FilterButton buttonText={"7"} />
                    </button>


                </div>
            </div>


            <div className="">
                <ProjectList categoryFilter={categoryFilter} />
            </div>




        </div>

    );
}