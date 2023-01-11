import React from "react";
import style from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.text}>
        <div className={style.text_upper}>WANNA FIND WORK</div>
        <div className={style.text_bottom}>JUST CONTACT US</div>
      </div>
      <div className={style.contacts_info}>
        <div className={style.contacts_mail}>
          <p>CONTACTS</p>
          <div className={style.contacts_using}>
            <div>Email</div>
            <div className={style.inactiv}>hello@carterogunsola.com</div>
          </div>
          <div className={style.contacts_using}>
            <div>Phone</div>
            <div className={style.inactiv}>+435 000 0000</div>
          </div>
        </div>
        <div className={style.contacts_mail}>
          <p>SOCIAL</p>
          <div className={style.contacts_using}>
            <div>Instagram</div>
            <div className={style.inactiv}>@huntnite</div>
          </div>
          <div className={style.contacts_using}>
            <div>Telegram</div>
            <div className={style.inactiv}>@huntnite</div>
          </div>
        </div>
        <div className={style.contacts_social}></div>
      </div>
    </div>
  );
};

export default Contacts;
