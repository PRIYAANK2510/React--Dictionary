const outputData = (data) => {
  const processedData = {
    word: null,
    phonetic: null,
    audio: null,
    meaningsArr: [],
  };
  for (let obj of data) {
    if (
      processedData.word === null ||
      processedData.word === "" ||
      processedData.word === undefined
    ) {
      processedData.word = obj.word;
    }

    for (let pho of obj.phonetics) {
      if (
        processedData.phonetic === null ||
        processedData.phonetic === undefined ||
        processedData.phonetic === ""
      ) {
        processedData.phonetic = pho.text;
      }
      if (
        processedData.audio === null ||
        processedData.audio === undefined ||
        processedData.audio === ""
      ) {
        processedData.audio = pho.audio;
      }
    }
    processedData.meaningsArr = [...processedData.meaningsArr, ...obj.meanings];
  }
  return processedData;
};

export default outputData;
