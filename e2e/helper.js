const sleepForSeconds = async (seconds) => {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

module.exports = { sleepForSeconds };
