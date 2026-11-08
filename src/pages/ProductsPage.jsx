import React from "react";
import ProductsHero from "../components/ProductsHero";
import ProductsGrid from "../components/ProductsGrid";
import ProductsUpcoming from "../components/ProductsUpcoming";
import TrustedBy from "../components/TrustedBy";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
      <ProductsUpcoming />
      <TrustedBy />
    </>
  );
}
