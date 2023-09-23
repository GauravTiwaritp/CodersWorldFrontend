import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const Navigate = useNavigate();
  const startRegister = () => {
    Navigate("/register");
    console.log("button clicked");
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title={"Welcome to Coderhouse !"} icon={"logo"}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          adipisci temporibus asperiores cupiditate debitis ducimus sint. Minus
          ducimus maxime voluptate reprehenderit excepturi quisquam ratione
          delectus, veniam inventore eligendi, ab soluta!
        </p>
        <div>
          <Button onClick={startRegister} text={"Get your username"} />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvited}>Have an invite text?</span>
          <Link className={styles.signinLink}>Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
