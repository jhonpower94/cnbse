import {
  CircularProgress,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CurrencyFormat } from "../config/services";
import "./styles.module.css";
import { useLocation, useParams } from "react-router-dom";
import HeaderBackButton from "./HeaderBackButton";
import { useEffect } from "react";

export function TransDetailDailog() {
  const location = useLocation();

  const theme = useTheme();

  let {
    id,
    transaction_type,
    amount,
    cointitle,
    recipient,
    confirmation,
    timestamp,
    referance,
  } = useParams();

  const isCredit = transaction_type === "Credit";
  const isrecipient = isCredit ? "" : recipient;
  const isConfirmation = confirmation < 3;

  useEffect(() => {
    console.log(id);
  });

  return (
    <div>
      <HeaderBackButton
        userImageUrl={`${isCredit ? "Recieve" : "Sent"} ${cointitle}`}
      />
      <div className="modal-body" bis_skin_checked={1}>
        <List aria-labelledby="nested-list-subheader">
          {[
            {
              primary: "Amount",
              secondary: "",
              secondaryaction: (
                <CurrencyFormat amount={amount} prefix={"$"} seperator={true} />
              ),
            },
            {
              primary: "Date",
              secondary: "",
              secondaryaction: timestamp,
            },

            {
              primary: "Status",
              secondary: isConfirmation ? <CircularProgress size={20} /> : "",
              secondaryaction: isCredit
                ? "3/3 Confirmation"
                : `${confirmation}/3 Confirmation`,
            },
            {
              primary: "Amount",
              secondary: "",
              secondaryaction: (
                <Typography
                  variant="h5"
                  color={isConfirmation ? "red" : "green"}
                >
                  {isCredit ? "+" : "-"}
                  <CurrencyFormat
                    amount={amount}
                    prefix={"$"}
                    seperator={true}
                  />
                </Typography>
              ),
            },
          ].map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.primary}
                secondary={item.secondary}
                primaryTypographyProps={{ variant: "h6" }}
              />
              <ListItemSecondaryAction>
                <Typography variant="h5">{item.secondaryaction}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          {referance === undefined ?  null : (
            <ListItem>
              <ListItemText
                primary={"Txid"}
                secondary={"Transaction id"}
                primaryTypographyProps={{ variant: "h6" }}
              />
              <ListItemSecondaryAction>
                <Typography
                  variant="h5"
                  sx={{
                    width: 180,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {referance}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ) }
        </List>
      </div>
    </div>
  );
}
