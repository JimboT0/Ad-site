import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';
import { Popular } from '@/types/Popular';

export async function getProjects(categoryFilter: string): Promise<Project[]>{

    const client = createClient({

        projectId: "krtr6fep",
        dataset: "production",
        apiVersion: "2023-07-12",

    });

     return client.fetch(
        groq`*[_type == "project" && category == $categoryFilter]{

            _id,

            _createdAt,

            name,

            category,

            "slug": slug.current,

            "image": image.asset->url,

            url,

            content

        }`,
        { categoryFilter }
    );

};

export async function getPopular(): Promise<Popular[]>{

    const client = createClient({

        projectId: "krtr6fep",
        dataset: "production",
        apiVersion: "2023-07-12",

    });

     return client.fetch(
        groq`*[_type == "popular"]{

            _id,

            _createdAt,

            name,

            "slug": slug.current,

            "image": image.asset->url,

            url,

            content

        }`,
    );

};

export async function getProject(slug: string): Promise<Project> {

    const client = createClient({

        projectId: "krtr6fep",
        dataset: "production",
        apiVersion: "2023-07-12",

    });

     return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{

            _id,

            _createdAt,

            name,

            category,

            "slug": slug.current,

            "image": image.asset->url,

            url,

            content

        }`,
        { slug }
    );
};


export async function getPopularItem(slug: string): Promise<Project> {

    const client = createClient({

        projectId: "krtr6fep",
        dataset: "production",
        apiVersion: "2023-07-12",

    });

     return client.fetch(
        groq`*[_type == "popular" && slug.current == $slug][0]{

            _id,

            _createdAt,

            name,

            category,

            "slug": slug.current,

            "image": image.asset->url,

            url,

            content

        }`,
        { slug }
    );
};