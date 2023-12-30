import React from "react";
import Product from "@/features/core/store/product/Product";
import { SessionProvider } from "@/features/core/components/SessionContext";

function page() {
  return (
    <SessionProvider>
      <Product />
    </SessionProvider>
  );
}

export default page;
