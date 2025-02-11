import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

import { ROUTER_PATH } from "../../constants/router-path";

import styles from "./index.module.css";

const CustomMenuBtn = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      variant="text"
      sx={{
        height: "100%",
        width: "100% ",
        padding: "0 16px",
        ":hover": {
          backgroundColor: "var(--basic-wht-hover)",
        },
      }}
    >
      {children}
    </Button>
  );
};
const Header: React.FC = () => {
  const location = useLocation();

  const is_user_management_selected = location.pathname === `/${ROUTER_PATH.USER_MANAGEMENT}`;
  const select_dashboard_class = `fw_500 fs_15 ff_pretendard fc_black ${is_user_management_selected ? "fc_green fw_bold" : ""}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, isSelected: boolean) => {
    if (isSelected) {
      e.preventDefault(); // 클릭을 막음
    }
  };

  return (
    <header className={styles.wrapper} id="header">
      {/* logo */}
      <div className={`${styles.logo} fw_bold fs_18`}>아나나마켓</div>
      {/* nav */}
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link
            to={`/${ROUTER_PATH.USER_MANAGEMENT}`}
            className={`${styles.li}`}
            onClick={(e) => {
              handleLinkClick(e, is_user_management_selected);
            }}
          >
            <CustomMenuBtn>
              <li className={select_dashboard_class}>유저관리</li>
            </CustomMenuBtn>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
