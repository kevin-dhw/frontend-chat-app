import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useVersionedStore = create(persist());
