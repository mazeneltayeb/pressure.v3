
// app/api/upload/route.js
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY
// );

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const files = formData.getAll('images');
    
//     console.log(`📤 رفع ${files.length} صورة`);

//     const uploadedUrls = [];

//     for (const file of files) {
//       const fileName = `products/${Date.now()}_${file.name.replace(/\s/g, "_")}`;
      
//       const { error: uploadError } = await supabase.storage
//         .from("products")
//         .upload(fileName, file);

//       if (uploadError) {
//         console.error("❌ خطأ الرفع:", uploadError);
//         continue;
//       }

//       const { data } = supabase.storage
//         .from("products")
//         .getPublicUrl(fileName);

//       uploadedUrls.push(data.publicUrl);
//     }

//     return new Response(JSON.stringify(uploadedUrls), { 
//       status: 200,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   } catch (error) {
//     console.error("💥 Upload API error:", error);
//     return new Response(JSON.stringify({ error: "Upload failed" }), { 
//       status: 500 
//     });
//   }
// }




export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('images');
    
    console.log(`📤 رفع ${files.length} صورة`);

    const uploadedUrls = [];
    const errors = [];

    for (const file of files) {
      try {
        // تحقق من الحجم والنوع
        if (file.size > 10 * 1024 * 1024) {
          errors.push(`الملف ${file.name} كبير جداً`);
          continue;
        }

        const fileName = `products/${Date.now()}_${file.name.replace(/\s/g, "_")}`;
        
        // رفع الملف
        const { error: uploadError } = await supabase.storage
          .from("products")
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // 🔥 الحل: أضف await هنا
        const { data } = await supabase.storage
          .from("products")
          .getPublicUrl(fileName);

        uploadedUrls.push(data.publicUrl);
        console.log(`✅ تم رفع: ${file.name}`);
        
      } catch (fileError) {
        console.error(`❌ فشل رفع ${file.name}:`, fileError);
        errors.push(fileError.message);
      }
    }

    return new Response(JSON.stringify({
      success: uploadedUrls,
      errors: errors
    }), { 
      status: errors.length === files.length ? 500 : 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error("💥 Upload API error:", error);
    return new Response(JSON.stringify({ error: "Upload failed" }), { 
      status: 500 
    });
  }
}