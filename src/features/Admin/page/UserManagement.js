import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchButton from "../component/SearchButton";
import UserModal from "../component/UserModal";
import UserSearch from "../component/UserSearch";
import UserTable from "../component/UserTable";
import {
  getListUserPhanTrangAction,
  getThongTinUserAction,
  postUserAction,
  UpdateUserAction,
  deleteUserAction,
} from "redux/action/UserAdminAction";
import Loading from "component/Loading";
import { AppContext } from "context/context";
function UserManagement() {
  const {
    loadingListUser,
    dataListUser,
    errorListUser,
    loadingThongTinUser,
    dataThongTinUser,
    errorThongTinUser,
  } = useSelector((state) => state.UserAdminReducer);
  const { showModal } = useContext(AppContext);
  const [contentSearch, setContentSearch] = useState({
    query: "",
    page: 1,
  });
  const [isAdding, setIsAdding] = useState(true);
  const [userModal, setUserModal] = useState(false);
  const dispatch = useDispatch();
  const handleSeach = (query, page) => {
    setContentSearch({ query, page });
  };
  const handleAddEditUser = (data) => {
    if (isAdding) {
      dispatch(postUserAction(data, showModal));
    } else {
      dispatch(UpdateUserAction(data, showModal));
    }
    const { query, page } = contentSearch;
    dispatch(getListUserPhanTrangAction(query, page));
  };
  const handleDeleteUser = (taiKhoan) => {
    dispatch(deleteUserAction(taiKhoan, showModal));
    const { query, page } = contentSearch;
    dispatch(getListUserPhanTrangAction(query, page));
  };
  const openModal = (id) => {
    if (id) {
      dispatch(getThongTinUserAction(id));
      setIsAdding(false);
    } else {
      setIsAdding(true);
    }
    setUserModal(true);
  };
  const closeModal = () => {
    setUserModal(false);
  };
  const handleBtnPages = (type) => {
    if (!dataListUser) return;
    const { totalPages, currentPage } = dataListUser;
    //console.log("total", totalPages, "current", currentPage);
    if (type === "prev") {
      const newValue = currentPage - 1 < 0 ? totalPages : currentPage - 1;
      setContentSearch({ ...contentSearch, page: newValue });
    }
    if (type === "next") {
      const newValue = currentPage + 1 > totalPages ? 1 : currentPage + 1;
      setContentSearch({ ...contentSearch, page: newValue });
    }
  };
  useEffect(() => {
    const { query, page } = contentSearch;
    dispatch(getListUserPhanTrangAction(query, page));
  }, [contentSearch.query, contentSearch.page]);
  if (errorListUser) {
    return <section className="user">{errorListUser}</section>;
  }
  return (
    <section className="user">
      <UserSearch handleOnSubmit={handleSeach} openModal={openModal} />
      <SearchButton
        handleOnSubmit={handleBtnPages}
        totalPages={dataListUser?.totalPages | 1}
        page={contentSearch.page}
        loadingListUser={loadingListUser}
      />
      {loadingListUser && <Loading />}
      {!loadingListUser && (
        <React.Fragment>
          <UserTable
            data={dataListUser.items}
            openModal={openModal}
            handleDeleteUser={handleDeleteUser}
          />
        </React.Fragment>
      )}
      <UserModal
        closeModal={closeModal}
        userModal={userModal}
        loadingThongTinUser={loadingThongTinUser}
        dataThongTinUser={dataThongTinUser}
        isAdding={isAdding}
        handleAddEditUser={handleAddEditUser}
      />
    </section>
  );
}

export default UserManagement;
