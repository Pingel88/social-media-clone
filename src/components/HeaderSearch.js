import React from "react";

function HeaderSearch() {
  return (
    <React.Fragment>
      <form>
        <div class="form-inline">
          <input class="form-control" placeholder="Search"/>
          <button type="submit" class="btn btn-outline-primary">Search</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default HeaderSearch;