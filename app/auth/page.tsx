"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { useEffect } from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { redirect, useRouter } from "next/navigation";
import readUserSession from "@/lib/readUserSession";

const Auth = () => {
  const router = useRouter();
  useEffect(() => {
    async function checkSession() {
      const session = await readUserSession();
      if (session) return router.push("/");
    }
    checkSession();
  }, []);
  return (
    <div className="bg-black text-white w-full min-h-full flex flex-col justify-between items-center p-8">
      <header className="self-start text-2xl font-bold w-full mb-5">
        Sepien
      </header>
      <main className="flex flex-col items-center mb-14">
        <h1 className="mb-5 font-bold">Get started</h1>
        <div className="w-1/2 min-w-[400px]">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="signin" className="w-full">
                Signin
              </TabsTrigger>
              <TabsTrigger value="signup" className="w-full">
                Signup
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <Signin />
            </TabsContent>
            <TabsContent value="signup">
              <Signup />
            </TabsContent>
          </Tabs>
        </div>
        {/* <div className="">
          <Button className="bg-blue-600 hover:bg-blue-700 mx-2 px-14">
            Log in
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 mx-2 px-14">
            Sign up
          </Button>
        </div> */}
      </main>
      <footer className="flex h-fit text-xs gap-4 text-slate-400">
        <Link href="#">Terms of use</Link>
        <Separator orientation="vertical" />
        <Link href="#">Privacy policy</Link>
      </footer>
    </div>
  );
};

export default Auth;
