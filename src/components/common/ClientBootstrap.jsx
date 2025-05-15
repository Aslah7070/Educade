
"use client"
import React, { useEffect } from 'react'

const ClientBootstrap = () => {
 useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return null;
}

export default ClientBootstrap
