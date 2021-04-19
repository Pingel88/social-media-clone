import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch"

function Header() {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-4">
          <HeaderNav />
        </div>
        <div class="col-4">

        </div>
        <div class="col-4">
        <HeaderSearch />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;