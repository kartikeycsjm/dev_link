
// import { Connect } from "@/db/Connection";
// import User from "@/db/models/UserSchema";
// const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const x = await params;
//   const verify = async () => {
//     'use server'
//     console.log(x.id);
//     await Connect();
//     const user = await User.findByIdAndUpdate(x.id, { verified: true })
//     console.log(user);
//   }
//   return (
//     <div className="w-full h-screen
//     flex items-center justify-center">
//       <form action={verify} >
//         <button type="submit" className="px-5 py-3 bg-blue-600 
//       rounded-lg text-[20px] text-white">verify your account</button>
//       </form>
//     </div>
//   )
// };

// export default Page;
