import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SideBar = ({ siteBar }) => (
  <sideBar
    style={{
      width: 100,
      height: 550,
      
    }}
  >
    <div
      style={{
        margin: `5 auto`,
        maxWidth: 190,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteBar}
        </Link>
      </h1>
    </div>
  </sideBar>
)

SideBar.propTypes = {
  siteBar: PropTypes.string,
}

SideBar.defaultProps = {
  siteBar: ``,
}

export default SideBar;
