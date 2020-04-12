import React, { useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import Layout from "../components/Layout/layout"
import Image from "../components/Layout/image"
import SEO from "../components/Layout/seo"
import { getExamplesData } from "../redux/Home/action"
import { selectExamplesData } from "../redux/Home/selectors"

const IndexPage = ({ onGetExamplesData }) => {
  useEffect(() => {
    console.log("onGetExamplesData", onGetExamplesData)
    onGetExamplesData()
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const mapStateToProps = createStructuredSelector({
  examplesData: selectExamplesData(),
})

export const mapDispatchToProps = {
  onGetExamplesData: getExamplesData,
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
