import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import 'tailwindcss/tailwind.css'; 

type Props = {
    params: { project: string };
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div className="p-8 border rounded-lg shadow-lg m-5 mx-10 bg-slate-100 drop-shadow-lg">
            <header className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-semibold">{project.name}</h1>
                <a
                    href={project.url}
                    title="View Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-200 rounded-lg text-pink-700 font-bold text-sm hover:scale-110"
                >
                    View More
                </a>
            </header>

            <div className="mt-8 relative w-200 h-64 mx-auto">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-64 h-64"
                />
            </div>

            <div className="text-sm text-gray-700 mt-10 flex items-center justify-between">
                <PortableText value={project.content} />
            </div>

        </div>
    );
}
