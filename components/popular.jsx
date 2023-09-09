"use client";
import { useState } from "react";
import { getPopular } from '@/sanity/sanity-utils';
import Link from 'next/link';



export default async function popular() {

    const populars = await getPopular();

    return (

        <div className="flex flex-col bg-white m-auto p-auto">
            <h1
                className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
            >
                Popular
            </h1>
            <div
                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
                <div
                    className="flex flex-row flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                >
                    <div className='flex flex-row px-3'>

                        {populars.map((project) => (

                            <Link
                                href={`${project.url}`}
                                key={project._id}
                                className="mx-10 h-64 w-64">

                                {project.image && (

                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        width={300}
                                        height={300}
                                        className="object-cover rounded-lg w-64 h-64"
                                    />

                                )}

                            </Link>


                        ))}

                    </div>


                </div>
                
            </div>
        </div>

    );
}