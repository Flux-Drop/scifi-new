import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-illustration p-4 rounded-2xl">
        <Image
          src="/assets/auth-illustration.jpg"
          alt="Auth Illustration"
          height={1000}
          width={1000}
          className="size-full object-cover rounded-lg"
        />
      </section>
      <section className="auth-form">
        <div className="auth-box">
          <Image src={"/icons/logo.svg"} alt="logo" height={37} width={37} />
          {children}
        </div>
      </section>
    </main>
  );
};

export default layout;
