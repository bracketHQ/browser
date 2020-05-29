import { View } from "../view";
import { appWindow } from "..";

export const updateMouseBoundries = (allowed: boolean) => {
    appWindow.overlay.setPointerEvents(allowed)
}

export const updateOverlayCursor = (cursor: string) => {
    appWindow.overlay.webContents.send('update-cursor', cursor)
}

export const showSuggestionBox = () => {
    appWindow.overlay.webContents.send('activate-suggestionbox')
}