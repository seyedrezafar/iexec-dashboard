import React from "react";

import { Header, Main, Footer, Cards, Table } from "@components";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main />
      <Cards />
      <Table  />
      <Footer />
    </div>
  );
};

export default Home;
