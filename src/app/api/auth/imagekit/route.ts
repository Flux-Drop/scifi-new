import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const {
  env: {
    imageKit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey,
  urlEndpoint,
  privateKey,
});

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
