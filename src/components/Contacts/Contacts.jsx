import React from "react";
import style from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
const Contacts = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.contacts}>
      <div className={style.text}>
        <div className={style.text_upper}>{t("footer.info.text1")}</div>
        <div className={style.text_bottom}>{t("footer.info.text2")}</div>
      </div>
      <div className={style.contacts_info}>
        <div className={style.contacts_mail}>
          <p>{t("footer.contacts.title")}</p>
          <div className={style.contacts_using}>
            <div>Email</div>
            <div className={style.inactiv}>service@huntnite.com</div>
          </div>
          <div className={style.contacts_using}>
            <div>{t("footer.contacts.phone")}</div>
            <div className={style.inactiv}>+38 (099) 563 34 06</div>
          </div>
        </div>
        <div className={style.contacts_mail}>
          <p>{t("footer.social.title")}</p>
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
