'use server';

import cloudinary
  from "@/lib/cloudinary";



export async function uploadImageAction(
  formData
) {

  try {

    const file =
      formData.get("file");



    if (!file) {

      throw new Error(
        "No file uploaded"
      );
    }



    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);



    const base64 =
      `data:${file.type};base64,${buffer.toString("base64")}`;



    const uploaded =
      await cloudinary.uploader.upload(

        base64,

        {
          folder:
            "ecommerce-products",
        }
      );



    return {

      success: true,

      url:
        uploaded.secure_url,
    };

  } catch (error) {

    console.error(error);

    throw new Error(
      "Image upload failed."
    );
  }
}