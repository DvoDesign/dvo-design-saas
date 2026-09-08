"use client";

import { create } from "zustand";

interface HomeUIState {
  /** True once the intro loader has slid away — gates all hero reveals. */
  introReady: boolean;
  setIntroReady: (value: boolean) => void;

  menuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;

  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useHomeUI = create<HomeUIState>((set) => ({
  introReady: false,
  setIntroReady: (value) => set({ introReady: value }),

  menuOpen: false,
  openMenu: () => set({ menuOpen: true }),
  closeMenu: () => set({ menuOpen: false }),

  modalOpen: false,
  openModal: () => set({ modalOpen: true, menuOpen: false }),
  closeModal: () => set({ modalOpen: false }),
}));
