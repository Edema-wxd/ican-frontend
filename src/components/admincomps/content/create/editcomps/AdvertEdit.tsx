import React, { useState } from "react";
import InputEle from "@/components/genui/InputEle";

function AdvertEdit() {
const [advert , setAdvert ] = useState("")

return  <div>
        <div>
          <InputEle label="Advert Title" type="text" id="title" onChange={() => {}} />
          <InputEle label="Advertisement Image" type="images" id="advert_image" onChange={() => {}} />
      
         
        </div>
        <div className="flex flex-col gap-2">
          <button className="rounded-full py-2 bg-primary text-white text-base w-full">
            Publish Advert
          </button>
          <button className=" py-2 text-primary border border-primary text-base rounded-full w-full">
            Save as Draft
          </button>
          <button className=" py-1 text-primary text-base rounded-full w-full">
            Preview
          </button>
        </div>
      </div>;}

export default AdvertEdit;
