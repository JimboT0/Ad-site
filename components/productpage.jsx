
// import { getProjects } from '@/sanity/sanity-utils';
// import Link from 'next/link';



// export default async function Productpage() {

//   const projects = await getProjects();


//   return (
//     <div className='w-[100%] flex flex-col justify-center items-center text-center'>
//     <div className='mt-5 gap-10 m-10'>

//       {projects.map((project) => (

//         <Link
//           href={`${project.url}`}
//           key={project._id}
//           className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-red-500 transition">

//           {project.image && (

//             <img
//               src={project.image}
//               alt={project.name}
//               width={300}
//               height={300}
//               className="object-cover rounded-lg"
//             />

//           )}


//           <div className='mt-2 font-extrabold bg-green-800 bg-clip-text text-transparent'>

//             {project.name}

//           </div>

//         </Link>


//       ))}

//     </div>
    
//   </div>
  


      

//   )
// }

