import React from "react";
import { BiSearch } from "react-icons/bi";
import Checkbox from "../../checkbox/Checkbox";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
const Table = ({
  toggleDeleteAlert,
  administrators,
  selectElement,
  paginations,
  dispatchDetail,
  editToggler,
}) => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
        <div onClick={toggleDeleteAlert} className={classes["delete-button"]}>
          Delete
        </div>
      </div>

      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>Ticket ID</p>
        <p className={classes["table-cell"]}>Email</p>
        <p className={classes["status"]}>Display Name</p>
        <p className={classes["table-cell"]}>Role </p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {administrators.length > 0 ? (
        administrators.map((item, index) => (
          <div key={item._id} className={classes["table-row"]}>
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{index + 1}</p>
            <p className={classes["table-cell"]}>{item.email}</p>
            <p className={classes["table-cell"]}>{item.name}</p>
            <p className={classes["table-cell"]}>{item.role}</p>
            <button onClick={() => {editToggler(item)}} className={classes["edit-button"]}>
              Edit
            </button>
          </div>
        ))
      ) : (
        <NoContent />
      )}

      <Paginations
        rowsPerPage={paginations.rowsPerPage}
        results={paginations.results}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Table;
