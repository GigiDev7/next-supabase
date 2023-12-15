import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  try {
    if (req.nextUrl.pathname.startsWith("/_next")) {
      return NextResponse.next();
    }

    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    const { data } = await supabase.auth.getSession();

    if (!data.session && req.nextUrl.pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return res;
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: req.headers,
      },
    });
  }
}
