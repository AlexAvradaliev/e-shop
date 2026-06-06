'use client';

import { useState }
  from "react";

import {
  uploadImageAction
} from "@/actions/upload";



export default function ImageUpload({
  onUploaded
}) {

  const [loading, setLoading] =
    useState(false);



  async function handleUpload(
    e
  ) {

    const file =
      e.target.files?.[0];



    if (!file) return;



    setLoading(true);



    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );



    try {

      const result =
        await uploadImageAction(
          formData
        );

      onUploaded(
        result.url
      );

    } catch (error) {

      alert(error.message);
    }

    setLoading(false);
  }



  return (

    <div>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />



      {loading && (
        <div>
          Uploading...
        </div>
      )}

    </div>
  );
}
