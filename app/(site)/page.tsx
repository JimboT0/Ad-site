import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';


import Popular from '../../components/popular';
import Filter from '../../components/filter';

export default async function Home() {


  return (

    <>
      <Popular />
      <Filter />



    </>


  );

}

