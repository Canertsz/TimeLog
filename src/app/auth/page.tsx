import AuthComponent from "@/components/AuthComponents"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React from "react"

export const dynamic = "force-dynamic"

async function page() {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.auth.getSession()

  if (data.session) {
    return redirect("/")
  }

  return <AuthComponent />
}

export default page
