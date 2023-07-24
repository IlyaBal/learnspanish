import React, { useEffect, useState } from 'react';

export const getBaseUrl = () => {


    const absoluteUrl = new URL(import.meta.url);
    const path1 = '/' + absoluteUrl.pathname.split('/')[1];

    return absoluteUrl.origin + path1;
}


export const getImageFolderUrl = () => {
    const base = getBaseUrl();
    const path = `${base}/images/`;
    console.log("🚀 ~ file: metaHelper.js:17 ~ getImageFolderUrl ~ path:", path);

    return path;
}