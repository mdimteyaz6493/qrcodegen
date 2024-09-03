import React from 'react'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../redux/Slice/ModalSlice';


const Navbar = () => {
  const ModalState = useSelector((state) => state.Modal.value);
  const dispatch = useDispatch();

  return (
    <>
      <nav>
            <span>QrCode</span>
            <span><MdOutlineQrCodeScanner  onClick={() => dispatch(toggleModal())} /></span>
      </nav>
    </>
  )
}

export default Navbar
