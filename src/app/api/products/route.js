

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // المفتاح السري
);

// 🟢 قراءة كل المنتجات
export async function GET() {
  try {
    const { data: products, error } = await supabase.from("products").select("*");

    if (error) throw error;

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("GET error:", error);
    return new Response(JSON.stringify([]), { status: 200 });
  }
}

// 🟢 إضافة منتج جديد
// export async function POST(req) {
//   try {
//     const newProduct = await req.json();

//     const { data, error } = await supabase
//       .from("products")
//       .insert([
//         {
//           name: newProduct.name,
//           price: newProduct.price,
//           description: newProduct.description || "",
//           images: newProduct.images || "",
//           video: newProduct.video || "",
//           youtube: newProduct.youtube || "",
//           article: newProduct.article || "",
//           category: newProduct.category || "",
//         },
//       ])
//       .select();

//     if (error) throw error;

//     return new Response(JSON.stringify(data[0]), { status: 201 });
//   } catch (error) {
//     console.error("POST error:", error);
//     return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
//   }
// }

export async function POST(req) {
  try {
    const newProduct = await req.json();

    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name: newProduct.name,
          price: newProduct.price,
          description: newProduct.description || "",
          images: newProduct.images || [], // ← غير إلى array فارغ
          video: newProduct.video || "",
          youtube: newProduct.youtube || "",
          article: newProduct.article || "",
          category: newProduct.category || "",
        },
      ])
      .select();

    if (error) throw error;

    return new Response(JSON.stringify(data[0]), { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}

// 🟡 تعديل منتج
// export async function PUT(req) {
//   try {
//     const updated = await req.json();

//     if (!updated.id) {
//       return new Response(JSON.stringify({ error: "Missing product id" }), { status: 400 });
//     }

//     const { data, error } = await supabase
//       .from("products")
//       .update({
//         name: updated.name,
//         price: updated.price,
//         description: updated.description || "",
//         images: updated.images || "",
//         video: updated.video || "",
//         youtube: updated.youtube || "",
//         article: updated.article || "",
//         category: updated.category || "",
//       })
//       .eq("id", updated.id)
//       .select();

//     if (error) throw error;

//     return new Response(JSON.stringify(data[0]), { status: 200 });
//   } catch (error) {
//     console.error("PUT error:", error);
//     return new Response(JSON.stringify({ error: "Update failed" }), { status: 500 });
//   }
// }

export async function PUT(req) {
  try {
    const updated = await req.json();

    if (!updated.id) {
      return new Response(JSON.stringify({ error: "Missing product id" }), { status: 400 });
    }

    const { data, error } = await supabase
      .from("products")
      .update({
        name: updated.name,
        price: updated.price,
        description: updated.description || "",
        images: updated.images || [], // ← غير إلى array فارغ
        video: updated.video || "",
        youtube: updated.youtube || "",
        article: updated.article || "",
        category: updated.category || "",
      })
      .eq("id", updated.id)
      .select();

    if (error) throw error;

    return new Response(JSON.stringify(data[0]), { status: 200 });
  } catch (error) {
    console.error("PUT error:", error);
    return new Response(JSON.stringify({ error: "Update failed" }), { status: 500 });
  }
}
// 🔴 حذف منتج
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing product id" }), { status: 400 });
    }

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return new Response(JSON.stringify({ error: "Delete failed" }), { status: 500 });
  }
}



// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// // 🟢 GET - قراءة كل المنتجات
// export async function GET() {
//   const { data, error } = await supabase.from("products").select("*");
//   if (error) {
//     console.error("GET Error:", error);
//     return Response.json({ error: "Failed to fetch products" }, { status: 500 });
//   }
//   return Response.json(data || []);
// }

// // 🟡 POST - إضافة منتج جديد
// export async function POST(req) {
//   const newProduct = await req.json();

//   const { data, error } = await supabase
//     .from("products")
//     .insert([
//       {
//         name: newProduct.name,
//         price: newProduct.price,
//         description: newProduct.description,
//         images: newProduct.images,
//         video: newProduct.video,
//         article: newProduct.article,
//         category: newProduct.category, // ✅ أضفناها هنا
//       },
//     ])
//     .select();

//   if (error) {
//     console.error("POST Error:", error);
//     return Response.json({ error: "Failed to add product" }, { status: 500 });
//   }

//   return Response.json({ success: true, product: data[0] });
// }

// // 🔵 PUT - تعديل منتج
// export async function PUT(req) {
//   const updatedProduct = await req.json();

//   const { data, error } = await supabase
//     .from("products")
//     .update({
//       name: updatedProduct.name,
//       price: updatedProduct.price,
//       description: updatedProduct.description,
//       images: updatedProduct.images,
//       video: updatedProduct.video,
//       article: updatedProduct.article,
//       category: updatedProduct.category, // ✅ أضفناها هنا كمان
//     })
//     .eq("id", updatedProduct.id)
//     .select();

//   if (error) {
//     console.error("PUT Error:", error);
//     return Response.json({ error: "Failed to update product" }, { status: 500 });
//   }

//   return Response.json({ success: true, product: data[0] });
// }

// // 🔴 DELETE - حذف منتج
// export async function DELETE(req) {
//   const { id } = await req.json();

//   const { error } = await supabase.from("products").delete().eq("id", id);
//   if (error) {
//     console.error("DELETE Error:", error);
//     return Response.json({ error: "Failed to delete product" }, { status: 500 });
//   }

//   return Response.json({ success: true });
// }

