import * as React from "react";
import "./Container.css";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const Container = () => {
  return (
    <div className="cont">
      <div className="container">
        <div className="container-user">
          <div className="container-user-icon">
            <Avatar
              sx={{
                width: 120,
                height: 120,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <AccountCircleIcon sx={{ fontSize: "80px" }}></AccountCircleIcon>
            </Avatar>
          </div>
          <div className="container-data-user">
            <h1 className="name-user">Daniel velasquez</h1>
            <h2 className="date-user">78412365</h2>
            <h2 className="date-user">26 may 2022 - hoy</h2>
          </div>
          <div className="container-data-user">
            <h1 className="name-user">Datos del banco</h1>
            <h2 className="date-user">NO. 123214234</h2>
            <h2 className="data-user">Banrural</h2>
            <h2 className="monto">Monto a transferir</h2>
            <h2 className="dinero">Q500.00</h2>
          </div>
          <hr className="hr-line" />
          <br/>
        </div>
      </div>
    </div>
  );
};
