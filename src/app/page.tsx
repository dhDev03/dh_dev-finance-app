import { ContainerLogin } from "@/components/containerLogin";
import { LoginForm } from "@/components/loginForm";

export default function Home() {
  return (
    <ContainerLogin >
      <div className=" order-2 bg-white m-auto w-[90%] max-w-[560px] rounded-xl px-5 py-6 " >
        <h1 className=" textPresent-1 text-gray-900 " >Login</h1>
        <LoginForm/>
      </div>
    </ContainerLogin>
  );
}
