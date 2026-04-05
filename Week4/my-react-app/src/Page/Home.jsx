import React from "react";
import Header from "../Components/Header/Header";
import ProductCard from "../Components/ProductCard/ProductCard";
import UserCircle from "../Components/UserCircle/UserCircle";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <UserCircle id={1} />
        <UserCircle id={2} />
        <UserCircle id={3} />
        <UserCircle id={4} />
      </div>
      <Footer />
    </>
  );
}
