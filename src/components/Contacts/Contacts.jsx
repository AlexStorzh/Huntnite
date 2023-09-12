import React from "react";
import style from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
const Contacts = () => {
	const { t, i18n } = useTranslation();
	return (
		<div className={style.contacts}>
			<div className={style.text}>
				<div className={style.text_upper}>{t("footer.info.text1")}</div>
				<div className={style.text_bottom}>
					{" "}
					<a href="mailto:service@huntnite.com">{t("footer.info.text2")}</a>
				</div>
			</div>
			<div className={style.contacts_info}>
				<div className={style.contacts_mail}>
					<p>{t("footer.contacts.title")}</p>
					<a href="mailto:service@huntnite.com" className={style.inactiv}>
						<div className={style.contacts_using}>
							<div>
								<a href="mailto:service@huntnite.com" className={style.inactiv}>
									Email
								</a>
							</div>
							<a href="mailto:service@huntnite.com" className={style.inactiv}>
								service@huntnite.com
							</a>
						</div>
					</a>
					<div className={style.contacts_using}>
						<div>{t("footer.contacts.phone")}</div>
						<div className={style.inactiv}>+38 (099) 563 34 06</div>
					</div>
				</div>
				<div className={style.contacts_mail}>
					<p>{t("footer.social.title")}</p>

					<a href="https://www.linkedin.com/company/huntnite/">
						<div className={style.contacts_using}>
							<div className={style.inactiv_name}>LinkedIn</div>
							<div className={style.inactiv}> Huntnite </div>
						</div>
					</a>
				</div>
				<div className={style.contacts_social}></div>
			</div>
		</div>
	);
};

export default Contacts;
