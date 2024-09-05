import { useState } from "react"

export const Form = ()=> {
    
    const [title, setTitle] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [contentType, setContentType] = useState('')
    const [description, setDescription] = useState('')
    const [brief , setBrief] = useState('')
    const [copy, setCopy] = useState('')

   const handleSubmit = (event)=>{
       event.preventDefault()
       
       console.log('data submitted')
   } 

    return(
        
        <>
         <div className="flex mt-10 bg-black max-w-md mx-auto">
            
            <form onSubmit={handleSubmit} >

            <label className="input input-bordered flex items-center gap-2 w-[350px] mb-2">
          Title
          <input type="text"  className="grow" placeholder="type the title.." />
         </label>
      
         <label className="input input-bordered flex items-center gap-3 w-[350px] mb-2">
          <span className="text-sm">Company Name</span>
          <input type="text" className="grow" placeholder="Apple inc" />
         </label>
         <label className="input input-bordered flex items-center gap-3 w-[350px] mb-2">
          <span className="text-sm">Keywords</span>
          <input type="text" className="grow" placeholder="Apple inc" />
         </label>
       
         <label className="input input-bordered flex items-center gap-3 w-[350px] mb-2">
          <span className="text-sm">contentType</span>
          <input type="text" className="grow" placeholder="Apple inc" />
         </label>
         <textarea className="textarea textarea-secondary w-[350px] mb-2 " placeholder="Description"></textarea>
         <textarea className="textarea textarea-secondary w-[350px] mb-2" placeholder="brief"></textarea>
         <textarea className="textarea textarea-secondary w-[350px] mb-2" placeholder="copy"></textarea>
         <input type="file" className="file-input file-input-bordered file-input-secondary w-[350px] mb-2" />
         <input type="file" placeholder="video" className="file-input file-input-bordered file-input-secondary w-[350px] mb-10" />

         <button className="btn mt-[-27px] w-[350px]">Submit</button>

            </form>


         </div>
     
    
        </>
    )
}