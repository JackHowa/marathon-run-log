import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children, lurieUsername }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`http://foundation.luriechildrens.org/goto/${lurieUsername}`}
        >
          Donate
        </a>{" "}
        to Lurie Children's Hospital and my marathon team.
      </footer>
    </div>
  )
}

export default Layout
