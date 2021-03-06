import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby tutorial</p>
      <StaticImage
        alt="Spiderman"
        src="../images/spiderman.jpeg" />
    </Layout >
  )
}

export default IndexPage