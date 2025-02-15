import {
  Email,
  Password,
  Security,
  TransferWithinAStation,
} from "@mui/icons-material";
import SettingsHeader from "../components/SettingsHeader";
import styles from "./Settings.module.css";
import { useNavigate } from "react-router-dom";
import HeaderBackButton from "../components/HeaderBackButton";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.settings}>
      <HeaderBackButton userImageUrl="Settings" />
      <SettingsHeader />
      <div className={styles.frameParent}>
        {[
          {
            title: "Reset password",
            icon: <Password />,
            path: "/auth/reset/password",
          },
          { title: "Reset email", icon: <Email />, path: "/auth/reset/email" },
          {
            title: "Connect wallet",
            icon: <TransferWithinAStation />,
            path: "/connect",
          },
          { title: "Phrase", icon: <Security />, path: "/phrase" },
        ].map((list, index) => (
          <button
            className={styles.frameGroup}
            key={index}
            onClick={() => navigate(list.path)}
          >
            <div className={styles.frameContainer}>
              {list.icon}

              <div className={styles.connectLedgerWallet}>{list.title}</div>
            </div>
            <img
              className={styles.arrowForwardIosIcon}
              alt=""
              src="/arrow-forward-ios@2x.png"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settings;
