import Header from '@/app/components/Header'
import { client } from '@/sanity/lib/client'
import React from 'react'



interface Params{
    params:{
        slug:string
    }
}




async function getPost(slug:string){
    const query=`*[_type=="post"&& slug.current=="${slug}"][0]{
        title,
        slug,
        publishedAt,
        excerpt,
         tags[]-> {
            _id,
            slug,
            name
          }
      }`




      const post=await client.fetch(query)
      return post;
}



const page = async ({params}:Params) => {
    const post=await getPost(params?.slug)
  return (
    <div>
        <Header title='Dyinamic Page'/>



    </div>
  )
}

export default page