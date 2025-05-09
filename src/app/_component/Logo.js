'use client'
import Image from "next/image"
import { checkToken } from "./checkToken"

export function Logo({token}) {
    return (
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#ffffff] p-6" onLoad={() => checkToken(token)}>
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="RCQ Logo"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
    )
}