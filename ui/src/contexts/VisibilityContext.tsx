import React, {Context, createContext, useContext, useEffect, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import { isEnvBrowser } from "../utils/misc";
import { useNavigate } from "react-router-dom";
import fetchNui from "../utils/fetchNui";

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null)

interface VisibilityProviderValue {
  setVisible: (visible: boolean) => void
  visible: boolean
  close: () => void
}

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();

  useNuiEvent<boolean>('setVisible', setVisible)
  
  const close = () => {
    fetchNui("close");
    setVisible(false);
  }

  useEffect(() => {
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Escape"].includes(e.code)) {
        if (!isEnvBrowser()) {
          fetchNui("close");
          setVisible(false);
        } else setVisible(!visible);
        navigate("/");
      }
    }

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [visible])

  return (
    <VisibilityCtx.Provider
      value={{
        visible,
        setVisible,
        close
      }}
    >
    {children}
  </VisibilityCtx.Provider>)
}

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
