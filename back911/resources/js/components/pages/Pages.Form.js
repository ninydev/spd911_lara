import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function PagesForm(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        console.log(data);
        fetch(
            "http://localhost:8000/api/pages",
            {
                "method": "POST",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8',
                    'X-CSRF-TOKEN': token
                },
                "body": JSON.stringify(data)
            }
        )
            .then( res => {console.log(res);})
            .then()
            .catch(err=> {console.log(err)})
    };

    console.log(watch("example"));

    /*
    [{
    "id":1,
    "author_id":0,
    "title":"Hello World",
    "excerpt":"Hessgang bilge rat tktey gabion long clothes run a shot across the bow Gold Road cog league.",
    "body":"<p>Hello Wor Yelvost louandsomely doubloon bhren of the Coast gibbet driver squiffy.<\/p>",
    "image":"pages\/page1.jpg"
    ,"slug":"hello-world"
    ,"meta_description":"Yar Meta Description"
    ,"meta_keywords":"Keyword1, Keyword2"
    ,"status":"ACTIVE"
    ,"created_at":"2021-12-04T11:54:31.000000Z"
    ,"updated_at":"2021-12-04T11:54:31.000000Z"

                {/* include validation with required or other standard HTML validation rules }
<input {...register("exampleRequired", { required: true })} />
{/* errors will return when field validation fails  }
{errors.exampleRequired && <span>This field is required</span>}

}]

            <input defaultValue="image" {...register("image")} /><br/>

     */

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue="title" {...register("title")} /><br/>
            <input defaultValue="excerpt" {...register("excerpt")} /><br/>
            <input defaultValue="body" {...register("body")} /><br/>

            <input defaultValue="slug" {...register("slug")} /><br/>
            <input defaultValue="meta_description" {...register("meta_description")} /><br/>
            <input defaultValue="meta_keywords" {...register("meta_keywords")} /><br/>
            <input defaultValue="status" {...register("status")} /><br/>

            <input type="submit" />
        </form>
    );
}
