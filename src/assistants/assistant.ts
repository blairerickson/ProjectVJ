export const changeIframeContent = (url: string, changeIframeContentFn: (url: string) => void) => {
  changeIframeContentFn(url);
};
