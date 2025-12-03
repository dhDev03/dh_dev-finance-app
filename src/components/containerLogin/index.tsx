import Image from "next/image";
import { ReactNode } from "react";
import imageLogin from "../../../assets/images/illustration-authentication.svg";

export function ContainerLogin({ children }: { children: ReactNode }) {
  return (
    <div className=" flex items-center justify-between w-full h-screen p-5 ">
      {children}
      <div className=" h-full hidden xl:flex items-center justify-center rounded-xl overflow-hidden relative order-1 ">
        <Image
          src={imageLogin}
          alt="Illustration Authentication"
          className=""
        />
        <div className=" flex flex-col items-center max-w-[480px] justify-center gap-6 absolute bottom-10 left-10 " >
          <h1 className=" textPresent-1 text-white " >Keep track of your money and save for your future</h1>
          <p className=" textPresent-4 text-white " >
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
    </div>
  );
}
