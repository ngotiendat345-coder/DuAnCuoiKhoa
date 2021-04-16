import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import Loading from "component/Loading";
SearchList.prototype = {
  data: PropTypes.object.isRequired,
  loadingListPhanTrang: PropTypes.bool.isRequired,
  contentSearch: PropTypes.object,
  handleSearch: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
function SearchList({
  data,
  loadingListPhanTrang,
  contentSearch,
  handleSearch,
  handleEdit,
  handleDelete,
}) {
  //console.log(contentSearch);
  const { items, totalPages, currentPage } = data;
  const handleNextPage = () => {
    const soTrang = currentPage + 1 > totalPages ? 1 : currentPage + 1;
    handleSearch({ ...contentSearch, soTrang });
  };
  const handlePrevios = () => {
    const soTrang = currentPage - 1 <= 0 ? totalPages : currentPage - 1;
    handleSearch({ ...contentSearch, soTrang });
  };

  return (
    <React.Fragment>
      <section className="SearchContent">
        <div className="pageActions">
          <button disabled={loadingListPhanTrang} onClick={handlePrevios}>
            Prev Page
          </button>
          <p style={{ margin: "0 0.5rem" }}>
            {currentPage} of {totalPages}
          </p>
          <button disabled={loadingListPhanTrang} onClick={handleNextPage}>
            Next Page
          </button>
        </div>
        {loadingListPhanTrang && (
          <h3 style={{ fontWeight: "500", textAlign: "center" }}>Loading...</h3>
        )}
        {items.length < 1 && (
          <h3>Please change Ma Nhom to get more movie VD:GP01 </h3>
        )}
        <section className="seachList">
          {items.length >= 1 && (
            <React.Fragment>
              {items.map((item) => (
                <MovieCard
                  item={item}
                  key={item.maPhim}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
            </React.Fragment>
          )}
        </section>
      </section>
    </React.Fragment>
  );
}

export default SearchList;
