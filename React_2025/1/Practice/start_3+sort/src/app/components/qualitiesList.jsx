import React from 'react'
import PropTypes from "prop-types";
import Qualitie from './qualitie';


export const QualitiesList = ({ qualities }) => {
  return <>

    {
      qualities.map((qual) => (
        <Qualitie key={qual._id} {...qual} />
      ))
    }

  </>


}

QualitiesList.propTypes = {
  qualities: PropTypes.array
}
