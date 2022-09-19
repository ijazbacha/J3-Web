/** @jsx jsx */
import { useState } from "react";
import { jsx, Label, Box, Input, Textarea, Button } from "theme-ui";
import colors from "theme/colors";
import FlashMessage from "react-flash-message";
import validator from "validator";

export default function TextFeilds() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const userMessageHandler = async (e) => {
    e.preventDefault()
    if (validator.isEmail(email)) {
      setShowMessage(false);
      setEmailError(false);
      setShowMessage(true);
      setTimeout(() =>{
        setShowMessage(false);
        setEmail('')
        setMessage('')
      },2000)
    //   console.log("email, message, valid", email, message);
    //   const res = await fetch("https://app.derzam.com/users/ContactUs", {
    //     body: JSON.stringify({
    //       email: email,
    //       message: message,
    //     }),
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }).then((res) => {
    //     const result = res.json();
    //     console.log("result", result);
    //     setShowMessage(true);
    //     setEmail("");
    //     setMessage("");
    //   });
    // } else {
    //   setEmailError(true);
    //   setShowMessage(true);
    //   console.log("email, message, invalid", email, message);
    }
  };

  return (
    <Box as="form" onSubmit={userMessageHandler}>
      {/* onSubmit={(e) => e.preventDefault(),
              setEmail(e.target.value),
              setMessage(e.target.value),
              console.log("email, message", email, message)
         }> */}
      {showMessage ? (
        <FlashMessage duration={5000} persistOnHover={true}>
          {emailError ? (
            <h1>Enter valid Email!</h1>
          ) : (
            <>
              <h1>Thank you!</h1>
              <p>
                We've received your message. Someone from our team will contact
                you soon.
              </p>
            </>
          )}
        </FlashMessage>
      ) : (
        <></>
      )}
      <Label htmlFor="email">Email</Label>
      <input
        name="email"
        id="email"
        mb={3}
        sx={styles.textinput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Box></Box>
      <Label htmlFor="message">Message</Label>
      <textarea
        ThemeColor
        name="message"
        id="message"
        rows={5}
        mb={3}
        sx={styles.textinput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <Button>Submit</Button>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    mb: -1,
  },

  img: {
    width: ["70px", null, null, "80px", "90px", "auto"],
    height: "auto",
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [2, 3],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ["10px", null, "15px"],
    },
    subTitle: {
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
  textinput: {
    padding: "10px",
    marginBottom: "8px",
    width: "100%",
    borderRadius: 7,
    borderColor: colors.ThemeColor,
    borderWidth: 1,
  },
};
