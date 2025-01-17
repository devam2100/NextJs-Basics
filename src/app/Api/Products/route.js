import { NextResponse } from "next/server";

export async function GET(req) {
    // const{searchParams}= new URL(req.url);
    // console.log('{searchParams}: ', {searchParams});

    return NextResponse.json({"msg":"hello devam"})
}

export async function POST(req){
    const res = await req.json();
    console.log(' res: ',  res);
    return NextResponse.json({"msg":"hello post"})
}