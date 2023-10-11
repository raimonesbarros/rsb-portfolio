export const handleCvDownload = () => {
  fetch("Raimones-dev-Curriculo.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Raimones-dev-Curriculo.pdf";
      alink.click();
    });
  });
};
