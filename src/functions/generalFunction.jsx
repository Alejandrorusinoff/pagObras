import React from 'react';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function postEmail(name,lastName,phone,email,msj) {
  return axios.post('http://localhost:3001/api/email', {
    name,
    lastName,
    phone,
    email,
    msj
  })
}

export function upperOneStr(str) {
  let word = str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
  return word
}

export function successToast(inputText) {
  toast.success(inputText, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export function errorToast(inputText) {
  toast.error(inputText, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};





