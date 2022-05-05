import React, { useState, useMemo } from "react";

const VideoContext = React.createContext();

export function VideoProvider(){
    const src=useState(null);
    
    const value= useMemo(()=>{
        return({
            src,
         })
    },[src])
    return <VideoContext.Provider value={value}   />
}
export function useVideo(){
    const context = React.useContext(VideoContext)
    if(!context){
        throw new Error('Video debe estar dentro del proveedor LinkVideoContext')
    }
    return context;
}