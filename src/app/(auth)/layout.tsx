import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <main className="auth-container ">
      <section className="auth-illustration p-4 rounded-2xl">
        <Image
          src="/assets/auth-illustration.jpg"
          alt="Auth Illustration"
          height={1000}
          width={1000}
          className="size-full object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between items-center">
          <div className="w-[95%] justify-between  items-center flex px-4 absolute top-10 left-5">
            <h1>Scify</h1>
            <Link
              href={"/"}
              className="px-2 py-1 bg-white/40 rounded-full text-sm flex w-max items-center gap-1"
            >
              Back to Website <ArrowRight className="text-white" size={18} />
            </Link>
          </div>
          <div className="lg:flex flex-col absolute bottom-12 text-4xl text-white text-center hidden ">
            <h1>Empowering Connectivity,</h1>
            <h1>Ensuring Security</h1>
          </div>
        </div>
      </section>
      <section className="auth-form">
        <div className="auth-box">
          {/* <Image src={"/icons/logo.svg"} alt="logo" height={37} width={37} /> */}
          {children}
        </div>
      </section>
    </main>
  );
};

export default layout;
