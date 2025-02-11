import React from "react";
import InputEle from "@/components/genui/InputEle";

import BlogEdit from "./editcomps/BlogEdit";
import GalleryEdit from "./editcomps/GalleryEdit";
import PublicationEdit from "./editcomps/PublicationEdit";

function NewContent() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col p-4 rounded-xl gap-4 bg-white">
        {/* Header */}
        <div>
          {/* Title section  */}
          <div>
            <h3>Add New Content</h3>
            <p>
              Fill in the required details to create new content for the
              selected category
            </p>
          </div>

          {/* Content Type Section */}
          <div>
            <InputEle
              label="Content Type"
              type="select"
              id="contentType"
              selectOptions={[
                "Blog",
                "Adverts",
                "Publication",
                "Gallery",
                "Technical",
                "Student",
              ]}
              onChange={() => {}}
            />
          </div>
        </div>
        <hr />
        {/* Variable display body for content creation */}
        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}

export default NewContent;
