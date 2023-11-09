import React from 'react'
import { useLocation } from 'react-router-dom'
import PDFViewer from '../components/PDFViewer'

const PDF = () => {
    const location = useLocation()
    console.log(location.pathname.split('/')[2])
    return (
        <PDFViewer src={location.pathname.split('/')[2]} />
    )
}

export default PDF