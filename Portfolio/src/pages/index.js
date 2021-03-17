import * as React from "react"
import { Link } from "gatsby"
import * as indexStyles from '../styles/index.module.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={indexStyles.name}>Ethan Pierce</h1>
    <p>Welcome to my site.</p>
      <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
