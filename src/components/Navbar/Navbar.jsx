import React, { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import logo from "../../images/image_2023-01-06_16-43-30.svg";
import DropdownMenu from "./DropdownMenu";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Navbar = () => {
	let [isVisible, setIsVisible] = useState(false);
	let [time, setTime] = useState();
	const { t, i18n } = useTranslation();

	useEffect(() => {
		function showTimeInKyiv() {
			const kyivTimezoneOffset = 3;
			const now = new Date();
			const utcTimestamp = now.getTime() + now.getTimezoneOffset() * 60000;
			const kyivTimestamp = utcTimestamp + kyivTimezoneOffset * 60 * 60 * 1000;
			const kyivTime = new Date(kyivTimestamp);
			const hours = kyivTime.getHours().toString().padStart(3);
			const minutes = kyivTime.getMinutes().toString().padStart(3);
			const seconds = kyivTime.getSeconds().toString().padStart(3);
			const timeString = `${hours}:${minutes}:${seconds}`;
			setTime(timeString);
			setTimeout(showTimeInKyiv, 1000);
		}
		showTimeInKyiv();
	}, []);

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	const changeLanguageDropdown = (language) => {
		i18n.changeLanguage(language);
		setIsVisible(!isVisible);
	};

	let scrollToBot = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	};

	let scrollToBotMenu = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
		setTimeout(() => setIsVisible(!isVisible), 700);
	};

	let scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<header>
			<div className={style.navigation}>
				<img onClick={scrollToTop} src={logo} alt="" />

				<div className={style.timer}>
					<span>
						{t("navbar.city")}, {t("navbar.country")}{" "}
					</span>
					<span>{time}</span>
				</div>
				<DropdownMenu
					scrollToBot={scrollToBot}
					setIsVisible={setIsVisible}
					isVisible={isVisible}
				/>
				<div className={style.links}>
					<p onClick={() => scrollToBot()}> &gt; {t("navbar.contact")}</p>
				</div>
				<div className={style.languages}>
					<div onClick={() => changeLanguage("ua")}>UA</div>
					<hr width="20px"></hr>

					<div onClick={() => changeLanguage("en")}>ENG</div>
				</div>
			</div>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className={style.menu}>
						<div className={style.links}>
							<p onClick={scrollToBotMenu}>{t("navbar.contact")}</p>
						</div>
						<div className={style.languages}>
							<div onClick={() => changeLanguageDropdown("ua")}>UA</div>
							<div onClick={() => changeLanguageDropdown("en")}>ENG</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
