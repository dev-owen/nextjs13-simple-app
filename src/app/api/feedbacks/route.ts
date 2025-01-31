import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getElasticClient } from "@/core/elastic";

export async function GET(request: NextRequest) {
  try {
    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;
    const skip = (page - 1) * limit;

    const feedbacks = await prisma.feedback.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    let json_response = {
      status: "success",
      results: feedbacks.length,
      feedbacks,
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const feedback = await prisma.feedback.create({
      data: json,
    });

    let json_response = {
      status: "success",
      data: {
        feedback,
      },
    };

    // elastic에 데이터를 추가함
    const elastic = await getElasticClient();

    await elastic.index({
      body: feedback,
      index: `feedbacks`,
    });

    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      let error_response = {
        status: "fail",
        message: "Feedback with title already exists",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
