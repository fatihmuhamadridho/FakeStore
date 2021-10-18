import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getUsers } from "../redux/actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Users.module.scss";
import DetailUser from "react-modal";
import Swal from "sweetalert2";
import Modal from "react-modal";

(Modal, DetailUser).setAppElement();

const Users = () => {
  const dispatch = useDispatch();
  const allUsersData = useSelector((state) => state.Users);
  const { loading, error, users } = allUsersData;

  // MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [descModalIsOpen, setdescModalIsOpen] = useState(false);
  const [editModalIsOpen, seteditModalIsOpen] = useState(false);

  // LOAD DATA
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // SEARCH TITLE
  const [inputSearch, setInputSearch] = useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {
    let data = { ...userInput };
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  const handleChangeEdit = (e) => {
    let data = { ...userEdit };
    data[e.target.name] = e.target.value;
    setUserEdit(data);
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  // ADD PRODUCT
  const [userInput, setUserInput] = useState({
    id: "",
    email: "",
    username: "",
    fullname: "",
    phone: "",
    address: "",
  });

  // EDIT AND UPDATE PRODUCT
  const [userEdit, setUserEdit] = useState({
    id: "",
    email: "",
    username: "",
    fullname: "",
    phone: "",
    address: "",
  });

  const handleEdit = (product) => {
    setUserEdit({
      id: user.id,
      email: user.email,
      username: user.username,
      fullname: user.name.firstname + " " + user.name.lastname,
      phone: user.phone,
      address:
        user.address.street +
        ", No. " +
        user.address.number +
        ", " +
        user.address.city +
        ", " +
        user.address.zipcode,
    });
    console.log("User = " + user.id);
  };

  return (
    <section className="article">
      <title>Users</title>
      <h1 style={{ lineHeight: "0px", marginTop: "80px" }}>List User</h1>

      {/* Modal */}
      <DetailUser
        isOpen={descModalIsOpen}
        ariaHideApp={false}
        style={{
          content: {
            top: "50px",
            left: "180px",
            right: "40px",
            bottom: "40px",
          },
        }}
      >
        <button
          onClick={() => setDetailUser(false)}
          style={{ float: "right" }}
          className="button-ud"
        >
          <FontAwesomeIcon
            icon={faWindowClose}
            size="2x"
            style={{ color: "red" }}
          />
        </button>
        <section style={{ fontSize: "24px" }}>
          <table>
            <tr>
              <td>id </td>
              <td> : </td>
              <td>{userEdit.id}</td>
            </tr>
            <tr>
              <td>email </td>
              <td> : </td>
              <td>{userEdit.email}</td>
            </tr>
            <tr>
              <td>username </td>
              <td> : </td>
              <td>{userEdit.username}</td>
            </tr>
            <tr>
              <td>fullname </td>
              <td>: </td>
              <td>{userEdit.fullname}</td>
            </tr>
            <tr>
              <td>phone </td>
              <td> : </td>
              <td>{userEdit.phone}</td>
            </tr>
            <tr>
              <td>address </td>
              <td> : </td>
              <td>{userEdit.address}</td>
            </tr>
          </table>
        </section>
      </DetailUser>

      <div className="Header">
        <button onClick={() => setModalIsOpen(true)} className="bn54">
          Create User
        </button>

        {/* SEACRH PRODUCT BY TITLE */}
        <div className="search">
          <form id="animated">
            {" "}
            <input
              name={inputSearch}
              type="text"
              placeholder="Search User Here..."
              onChange={handleChangeSearch}
              value={inputSearch}
              className="input-search"
            />
          </form>
        </div>
      </div>
      <div>
        <div className={styles.list}>
          <div className="id">
            <p>No.</p>
          </div>

          <div className={styles.leftcolumn}>
            <p>Name</p>
          </div>

          <div className={styles.rightcolumn}>
            <p>Username</p>
          </div>

          <div className={styles.actioncolumn}>
            <p>Action</p>
          </div>
        </div>
        <hr />
        {loading
          ? "Loading..."
          : error
          ? error.message
          : users
              .filter((user) => {
                if (inputSearch === "") {
                  return user;
                } else if (
                  user.name.firstname
                    .toLowerCase()
                    .includes(inputSearch.toLocaleLowerCase())
                ) {
                  return user;
                } else if (
                  user.name.lastname
                    .toLowerCase()
                    .includes(inputSearch.toLocaleLowerCase())
                ) {
                  return user;
                } else if (
                  user.email
                    .toLowerCase()
                    .includes(inputSearch.toLocaleLowerCase())
                ) {
                  return user;
                } else if (
                  user.username
                    .toLowerCase()
                    .includes(inputSearch.toLocaleLowerCase())
                ) {
                  return user;
                }
              })
              .map((user) => (
                // .map((u) => (
                <div key={user.id}>
                  <div className={styles.list}>
                    <div className="id">
                      <p>{user.id}</p>
                    </div>

                    <div className={styles.leftcolumn}>
                      <p>
                        {user.name.firstname} {user.name.lastname}
                      </p>
                    </div>

                    <div className={styles.rightcolumn}>
                      <p>{user.username}</p>
                    </div>

                    <div className={styles.actioncolumn}>
                      {/* DETAIL PRODUCT */}
                      <button
                        onClick={() => setDetailUser(true) & handleEdit(user)}
                        className="button-ud"
                      >
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          size="1x"
                          style={{ color: "green" }}
                        />
                      </button>

                      {/* EDIT PRODUCT */}
                      <button
                        onClick={() =>
                          seteditModalIsOpen(true) & handleEdit(user)
                        }
                        className="button-ud"
                      >
                        <FontAwesomeIcon
                          icon={faPen}
                          size="1x"
                          style={{ color: "blue" }}
                        />
                      </button>

                      {/* DELETE PRODUCT */}
                      <button
                        onClick={() =>
                          dispatch(
                            deleteUsers(user.id),
                            Swal.fire(
                              "Berhasil Menghapus!",
                              "User " + user.username + " Berhasil di Hapus!",
                              "success"
                            )
                          )
                        }
                        className="button-ud"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="1x"
                          style={{ color: "red" }}
                        />
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
      </div>
    </section>
  );
};

export default Users;
