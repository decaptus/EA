import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from "react-i18next";

function Support() {

  const [t, i18n] = useTranslation("global");

  return (
    <>
    <Navbar/>
    <div className='support'>
      <h1>{t("support_page.title")}</h1>
    </div>
    </>
  );
}

export default Support;