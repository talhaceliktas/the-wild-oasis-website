import { NextRequest, NextResponse } from "next/server";
import { getBookedDatesByCabinId, getCabin } from "../../../_lib/data-service";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(request: NextRequest, { params }: { params: any }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(Number(cabinId)),
      getBookedDatesByCabinId(Number(cabinId)),
    ]);
    return NextResponse.json({ cabin, bookedDates });
  } catch {
    return NextResponse.json({ message: "Cabin not found" });
  }
}

export async function POST() {}
