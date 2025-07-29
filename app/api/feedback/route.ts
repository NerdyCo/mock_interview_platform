import { createFeedback } from "@/lib/actions/general.action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { interviewId, userId, transcript } = await request.json();
  const result = await createFeedback({ interviewId, userId, transcript });

  if (!result.success) {
    return NextResponse.json(
      { error: "Failed to create feedback" },
      { status: 500 }
    );
  }

  return NextResponse.json({ feedback: result.feedbackId }, { status: 200 });
}
