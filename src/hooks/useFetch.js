import { fetchChiTietRap, fetchChiTietPhim } from "api/filmAPI";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

useFetch.prototype = {
  maPhim: PropTypes.number.isRequired,
};

function useFetch(maPhim) {
  const [data, setData] = useState({
    currentHeThongFetch: null,
    dataFetch: null,
    loadingFetch: true,
    errorFetch: null,
  });

  useEffect(() => {
    setData({ ...data, loading: true });
    fetchChiTietPhim(maPhim)
      .then((res) => {
        const currentHeThong = Object.keys(res)[0];
        setData({
          dataFetch: res,
          currentHeThongFetch: currentHeThong,
          loadingFetch: false,
          errorFetch: null,
        });
      })
      .catch(({ message }) => {
        setData({ ...data, loadingFetch: false, errorFetch: message });
      });
  }, [maPhim]);

  return { ...data };
}

export default useFetch;
