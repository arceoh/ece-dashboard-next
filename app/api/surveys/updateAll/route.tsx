import { Survey } from "@/app/_modles/surveyModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Udpate all documents
// export async function GET(request: Request) {
//   try {
//     await dbConnect();

//     const documentsToUpdate = await Survey.find({
//       "student.lastName": { $exists: true },
//     });

//     for (const document of documentsToUpdate) {
//       if (document.guardian.lastName && document.student.lastName) {
//         document.student.lastName = document.guardian.lastName;
//       }
//       await document.save();
//     }

//     return NextResponse.json({ message: "Updated" }, { status: 200 });
//   } catch (err) {
//     console.error("Error updating documents:", err);
//     return NextResponse.json({ message: "ERROR" }, { status: 500 });
//   }
// }

// Reaname field
// export async function GET(request: Request) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     throw new Error("Auth is required");
//   }
//   try {
//     await dbConnect();

//     const updateResult = await Survey.updateMany(
//       {},
//       {
//         $rename: {
//           "guardian.preferedLocation": "guardian.preferredLocation",
//           "guardian.preferedLanguage": "guardian.preferredLanguage",
//         },
//       },
//       { multi: true, strict: false }
//     );

//     console.log("Documents updated:", updateResult);

//     return NextResponse.json(
//       { message: "Updated", results: updateResult },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Error updating documents:", err);
//     return NextResponse.json({ message: "ERROR" }, { status: 500 });
//   }
// }
