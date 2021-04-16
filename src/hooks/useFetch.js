import { getThongTinPhim } from "api/adminAPI";
import React, { useEffect, useState } from "react";
// import PropTypes, { oneOfType } from "prop-types";

function useFetch(maPhim) {
  const [fetchData, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (maPhim) {
      setData({ ...fetchData, loading: true });
      getThongTinPhim(maPhim)
        .then((res) => {
          setData({ ...fetchData, loading: false, data: res });
        })
        .catch(({ message }) => {
          setData({ ...fetchData, loading: false, error: message });
        });
    }
  }, [maPhim]);
  if (!maPhim) {
    return { loading: false, error: null, data: null };
  }
  return { ...fetchData };
}

export default useFetch;
